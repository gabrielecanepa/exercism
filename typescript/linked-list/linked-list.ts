export class LinkedList<TElement> {
  private list: TElement[] = []

  public push(element: TElement): void {
    this.list.push(element)
  }

  public pop(): unknown {
    return this.list.pop()
  }

  public shift(): unknown {
    return this.list.shift()
  }

  public unshift(element: TElement): void {
    this.list.unshift(element)
  }

  public delete(element: TElement): void {
    const index = this.list.indexOf(element)
    if (index === -1) return
    this.list.splice(index, 1)
  }

  public count(): number {
    return this.list.length
  }
}
