export class Clock {
  private hours: number
  private minutes: number

  constructor(hour: number, minute?: number) {
    this.hours = hour < 0
      ? hour + 24 * Math.ceil(-hour / 24)
      : hour > 23
        ? hour % 24
        : hour
    this.minutes = 0
    if (minute) this.plus(minute)
  }

  public toString(): string {
    return `${this.twoDigits(this.hours)}:${this.twoDigits(this.minutes)}`
  }

  public plus(minutes: number): Clock {
    const totalMinutes = this.minutes + minutes

    if (totalMinutes < 0 || totalMinutes >= 60) {
      const hours = Math.floor(totalMinutes / 60)
      this.hours += hours - 24 * Math.floor(hours / 24)
      this.minutes = totalMinutes - hours * 60
    } else {
      this.minutes += minutes
    }

    if (this.hours >= 24) {
      this.hours = this.hours % 24
    }

    return this
  }

  public minus(minutes: number): Clock {
    this.plus(-minutes)
    return this
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString()
  }

  private twoDigits(n: number): string {
    return n < 10 ? `0${n}` : n.toString()
  }
}
