export class List {
  public values: any[]

  constructor(...values: any[]) {
    this.values = values
  }

  public static create(...values: any[]): List {
    return new List(...values)
  }

  public length(): number {
    let length: number = 0
    while (length in this.values) length++
    return length
  }

  public forEach<El>(fn: (el: El) => any): void {
    for (let i: number = 0; i in this.values; i++) {
      fn(this.values[i])
    }
  }

  public append(list: List): List {
    return new List(...[...this.values, ...list.values])
  }

  public concat(list: List): List {
    let concatList: List = this
    for (let i: number = 0; i in list.values; i++) {
      concatList = concatList.append(list.values[i])
    }
    return concatList
  }

  public filter<El>(fn: (el: El) => boolean): List {
    let values: any[] = []
    for (let i: number = 0; i in this.values; i++) {
      values = fn(this.values[i]) ? [...values, this.values[i]] : values
    }
    return new List(...values)
  }

  public map<El>(fn: (el: El) => any): List {
    let values: any[] = []
    for (let i: number = 0; i in this.values; i++) {
      values = [...values, fn(this.values[i])]
    }
    return new List(...values)
  }

  public foldl<Acc, El>(fn: (acc: Acc, el: El) => any, init: any): any {
    let total = init
    for (let i: number = 0; i in this.values; i++) {
      total = fn(total, this.values[i])
    }
    return total
  }

  public foldr<Acc, El>(fn: (acc: Acc, el: El) => any, init: any): any {
    return this.reverse().foldl(fn, init)
  }

  public reverse(): List {
    let values: any[] = []
    for (let i: number = 0; i in this.values; i++) {
      values = [this.values[i], ...values]
    }
    return new List(...values)
  }
}
