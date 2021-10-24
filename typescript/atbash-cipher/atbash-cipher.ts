const PLAIN_ALPHABET: string = 'abcdefghijklmnopqrstuvwxyz'
const CIPHER_ALPHABET: string = PLAIN_ALPHABET.split('').reverse().join('')

const formatText = (text: string): string => text.toLowerCase().replace(/[^a-z0-9]/g, '')

export const encode = (plainText: string): string =>
  (formatText(plainText)
    .replace(/[a-z]/g, (letter: string): string => CIPHER_ALPHABET[PLAIN_ALPHABET.indexOf(letter)])
    .match(/.{1,5}/g) ?? [])
    .join(' ')

export const decode = (cipherText: string): string =>
  formatText(cipherText)
    .trim()
    .replace(/[a-z]/g, (letter: string): string => PLAIN_ALPHABET[CIPHER_ALPHABET.indexOf(letter)])
