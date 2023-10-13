const ALLOWED_OPERATIONS: readonly string[] = ['plus', 'minus', 'multiplied by', 'divided by'] as const

type Operations = {
  [key: typeof ALLOWED_OPERATIONS[number]]: (x: number, y: number) => number
}

class Wordy {
  private OPERATIONS: Operations = {
    plus: (x: number, y: number) => x + y,
    minus: (x: number, y: number) => x - y,
    'multiplied by': (x: number, y: number) => x * y,
    'divided by': (x: number, y: number) => x / y,
  }
  private QUESTION_REGEXP = /what\sis(\s(?<x>-?[\d\s]+))?(\s(?<a>\w+(\sby)?)(\s(?<y>-?\d+))?)?(\s(?<b>\w+(\sby)?)\s(?<z>-?\d+))?\?/i

  answer = (question: string): number => {
    const match: RegExpMatchArray | null = question.match(this.QUESTION_REGEXP)

    // Parsing
    const { x: stringifiedX, y: stringifiedY, z: stringifiedZ, a, b } = match?.groups ?? {}
    const [x, y, z]: number[] = [stringifiedX, stringifiedY, stringifiedZ].map(stringifiedN => parseInt(stringifiedN))

    // Errors
    if (!stringifiedX || (a && !a.split(' ').every(o => ['plus', 'minus'].includes(o)))) throw new Error('Unknow operation')
    if (/\s/.test(stringifiedX) || /\s/.test(stringifiedY) || (a && !ALLOWED_OPERATIONS.includes(a))) throw new Error('Syntax error')

    // Calculus
    if (z && b) return this.computeOperation(this.computeOperation(x, y, a), z, b)
    if (y && a) return this.computeOperation(x, y, a)
    return x
  }

  private computeOperation = (x: number, y: number, operation: typeof ALLOWED_OPERATIONS[number]) => this.OPERATIONS[operation](x, y)
}

const wordy = new Wordy()

export const answer = wordy.answer
