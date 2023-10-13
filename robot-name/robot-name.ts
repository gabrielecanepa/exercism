export class Robot {
  public name: string
  public static names: Set<string> = new Set()

  private static ALPHABET: string[] = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']

  constructor() {
    this.name = Robot.generateRandomRobotName()
  }

  public resetName(): void {
    this.name = Robot.generateRandomRobotName()
  }

  public static releaseNames(): void {
    Robot.names.clear()
  }

  private static generateRandomRobotName(): string {
    const newName = `${this.generateRandomLetter()}${this.generateRandomLetter()}${this.generateRandomDigit()}${this.generateRandomDigit()}${this.generateRandomDigit()}`
    if (Robot.names.has(newName)) return this.generateRandomRobotName()
    Robot.names.add(newName)
    return newName
  }

  private static generateRandomLetter(): string[1] {
    return this.ALPHABET[Math.floor(Math.random() * this.ALPHABET.length)]
  }

  private static generateRandomDigit(): number {
    return Math.floor(Math.random() * 10)
  }
}
