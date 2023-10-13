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

export const COLORS: Array<string> = Object.keys(RESISTORS)

export const colorCode = (color: string): number => {
  const resistorColor = color.toLowerCase()

  if (!COLORS.includes(resistorColor)) {
    throw new Error('This is not a valid resistor color')
  }

  return (RESISTORS as any)[resistorColor]
}
