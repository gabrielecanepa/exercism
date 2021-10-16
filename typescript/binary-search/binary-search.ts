export class BinarySearch {
  private static haystack: number[] = []

  private static get middleValue(): number {
    return this.haystack[this.middleValueIndex]
  }

  private static get middleValueIndex(): number {
    return Math.floor(this.haystack.length / 2)
  }

  public static find(haystack: number[], needle: number): number | Error {
    BinarySearch.haystack = haystack
    while (needle !== BinarySearch.middleValue) {
      // if (BinarySearch.middleValueIndex === 0) throw new Error('The specified value is not in array')
      BinarySearch.haystack = needle > BinarySearch.middleValue ? BinarySearch.haystack.slice(0, BinarySearch.middleValueIndex) : BinarySearch.haystack.slice(BinarySearch.middleValueIndex)
      console.log(BinarySearch.middleValueIndex)
    }
    return BinarySearch.middleValueIndex
  }
}

export const find = BinarySearch.find
