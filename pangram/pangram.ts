type Alphabet = string[]

const LATIN_ALPHABET: Alphabet = [...'abcdefghijklmnopqrstuvwxyz']

export const isPangram = (sentence: string): boolean => {
  if (!sentence) return false
  const sentenceLetters = [...sentence.toLowerCase()].filter(char => /[a-zA-Z]/.test(char))
  return LATIN_ALPHABET.every(letter => sentenceLetters.includes(letter))
}
