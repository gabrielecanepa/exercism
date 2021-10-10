interface Roster {
  [grade: number]: string[]
}

export class GradeSchool {
  private _roster: Roster

  constructor() {
    this._roster = {}
  }

  public roster(): Roster {
    return JSON.parse(JSON.stringify(this._roster))
  }

  public grade(grade: number): string[] {
    return this.roster()[grade] ?? []
  }

  public add(student: string, grade: number): void {
    const studentGrade = this.getStudentGrade(student)
    if (studentGrade) {
      if (studentGrade === grade) return
      this._roster[studentGrade] = this._roster[studentGrade].filter(student => student !== student)
    }
    const studentsInGrade = this._roster[grade]
    if (studentsInGrade) {
      studentsInGrade.push(student)
    } else {
      this._roster[grade] = [student]
    }
    this.sort()
  }

  private sort(): void {
    this._roster = Object.keys(this._roster).sort().reduce((grades, grade) => {
      (grades as any)[grade] = (this._roster as any)[grade].sort()
      return grades
    }, {})
  }

  private getStudentGrade(student: string): number | null {
    const grade = Object.keys(this._roster).find(grade => (this._roster as any)[grade].includes(student))
    return grade ? parseInt(grade) : null
  }
}
