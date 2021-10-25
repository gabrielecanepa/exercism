export class SimpleCipher {
  private KEY_LENGTH = 100
  private CHARACTERS = String.fromCharCode(...Array(123).keys()).slice(97)
  key: string
  shift: number

  constructor(key?: string, shift?: number) {
    this.key = key ?? this.generateKey()
    this.shift = shift ?? this.getRandomShift()
  }

  encode(text: string): string {
    return text.replace(/[a-z]/g, char => this.CHARACTERS[this.CHARACTERS.indexOf(char) + this.shift])
  }

  decode(encodedText: string): string {
    return encodedText.replace(/[a-z]/g, char => this.CHARACTERS[this.CHARACTERS.indexOf(char) - this.shift])
  }

  private generateKey = (key = ''): string => {
    for (let i = 0; i < this.KEY_LENGTH; i++) {
      key += this.CHARACTERS[this.getRandomShift()]
    }
    return key
  }

  private getRandomShift = (): number => {
    return Math.floor(Math.random() * (this.CHARACTERS.length + 1))
  }
}
