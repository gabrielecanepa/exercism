const isYelled = (sentence: string): boolean => /[A-Za-z]/.test(sentence) && sentence === sentence.toUpperCase()

export const hey = (message: string): string => {
  const sentence = message.replace(/\s+/g, ' ').trim()
  if (!sentence.trim()) return 'Fine. Be that way!'
  if ([...sentence].pop() === '?') return isYelled(sentence) ? 'Calm down, I know what I\'m doing!' : 'Sure.'
  if (isYelled(sentence)) return 'Whoa, chill out!'
  return 'Whatever.'
}
