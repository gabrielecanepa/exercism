type Nucleotides = Array<string>

const DNA: Nucleotides = ['g', 'c', 't', 'a']
const RNA: Nucleotides = ['c', 'g', 'a', 'u']

export const toRna = (sequence: string): string => {
  const sequenceArray = sequence.toLowerCase().split('')

  if (!sequenceArray.every(nucleotide => DNA.includes(nucleotide))) {
    throw new Error('Invalid input DNA.')
  }

  return sequenceArray.map(nuclotide => RNA[DNA.indexOf(nuclotide)]).join('').toUpperCase()
}
