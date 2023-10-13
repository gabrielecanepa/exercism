type handshake = 'wink' | 'double blink' | 'close your eyes' | 'jump'

class Handshake {
  private static handshakes: {
    [code: number | string]: handshake
  } = {
      1: 'wink',
      10: 'double blink',
      100: 'close your eyes',
      1000: 'jump',
    }

  public static commands(code: number): handshake[] {
    return Number(code).toString(2).split('').reverse().reduce((handshakes, n, i) => {
      if (n !== '1') return handshakes
      if (i === 4) return handshakes.reverse()
      const key = Object.keys(Handshake.handshakes)[i]
      return [...handshakes, (Handshake.handshakes as never)[key]]
    }, [])
  }
}

export const commands = Handshake.commands
