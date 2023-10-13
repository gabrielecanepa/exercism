export class Rational {
  public a: number
  public b: number

  constructor(a: number, b: number) {
    if (b === 0) {
      throw new Error('Denominator must be different from 0')
    }
    this.a = a
    this.b = b
  }

  add(rational: Rational): Rational {
    return new Rational(this.a * rational.b + rational.a * this.b, this.b * rational.b).reduce()
  }

  sub(rational: Rational): Rational {
    return new Rational(this.a * rational.b - rational.a * this.b, this.b * rational.b).reduce()
  }

  mul(rational: Rational): Rational {
    return new Rational(this.a * rational.a, this.b * rational.b).reduce()
  }

  div(rational: Rational): Rational {
    if (rational.a === 0) {
      throw new Error('Can\'t divide by 0')
    }
    return new Rational(this.a * rational.b, this.b * rational.a).reduce()
  }

  abs(): Rational {
    return new Rational(Math.abs(this.a), Math.abs(this.b)).reduce()
  }

  exprational(exponent: number): Rational {
    if (exponent === 0) return new Rational(1, 1)
    if (exponent > 0) return new Rational(Math.pow(this.a, exponent), Math.pow(this.b, exponent)).reduce()
    const absExponent = Math.abs(exponent)
    return new Rational(Math.pow(this.b, absExponent), Math.pow(this.a, absExponent)).reduce()
  }

  // From https://exercism.org/tracks/typescript/exercises/rational-numbers/solutions/chuckwondo
  // See https://en.wikipedia.org/wiki/Nth_root#Logarithmic_calculation
  // Using logarithmic calculation gets us the precision necessary to pass the test
  expreal(base: number): number {
    return 2 ** (Math.log2(base ** this.a) / this.b);
  }

  reduce(): Rational {
    const gdc = Rational.gdc(this.a, this.b)
    const numerator = this.a / gdc
    const denominator = this.b / gdc
    if (denominator < 0) return new Rational(-numerator, -denominator)
    return new Rational(numerator, denominator)
  }

  public static gdc(a: number, b: number): number {
    if (!b) return Math.abs(a)
    return this.gdc(b, a % b)
  }
}
