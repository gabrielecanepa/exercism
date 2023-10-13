type seconds = number
type years = number
type OrbitalPeriod = seconds | years

interface PlanetsOrbitalPeriods {
  earth: OrbitalPeriod,
  mercury: OrbitalPeriod,
  venus: OrbitalPeriod,
  mars: OrbitalPeriod,
  jupiter: OrbitalPeriod,
  saturn: OrbitalPeriod,
  uranus: OrbitalPeriod,
  neptune: OrbitalPeriod,
}

const ORBITAL_PERIODS: PlanetsOrbitalPeriods = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}

const EARTH_ORBITAL_PERIOD: seconds = 31557600

export function age(planet: string, seconds: seconds): number {
  return +(seconds / (EARTH_ORBITAL_PERIOD * (ORBITAL_PERIODS as any)[planet.toLowerCase()])).toFixed(2)
}
