interface Resistors {
  black: number;
  brown: number;
  red: number;
  orange: number;
  yellow: number;
  green: number;
  blue: number;
  violet: number;
  grey: number;
  white: number;
}

const RESISTORS: Resistors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
} 

export function decodedValue(colors: Array<string>): number {
  return parseInt(colors.slice(0, 2).map((color: string) => (RESISTORS as any)[color]).join(''))
}
