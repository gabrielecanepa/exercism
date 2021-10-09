export class Matrix {
  matrix: number[][]

  constructor(sequence: string) {
    this.matrix = sequence.split('\n').map(row => row.split(' ').map(n => parseInt(n)))
  }

  get rows(): number[][] {
    return this.matrix
  }

  get columns(): number[][] {
    const columns = []
    for (let i = 0; i < this.rows[0].length; i++) {
      columns.push(this.rows.map(row => row[i]))
    }
    return columns
  }
}
