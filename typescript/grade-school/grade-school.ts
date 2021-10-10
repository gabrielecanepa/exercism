interface Roster {
  [grade: number]: string[]
}

export class GradeSchool {
  private grades: Roster

  constructor() {
    this.grades = {}
  }

  public roster(): Roster {
    return this.grades
  }

  public grade(grade: number): string[] {
    return [...(this.grades[grade] || [])]
  }

  public add(student: string, grade: number): void {
    const studentGrade = this.getStudentGrade(student)
    if (studentGrade) {
      if (studentGrade === grade) return
      this.grades[studentGrade] = this.grades[studentGrade].filter(student => student !== student)
    }
    const studentsInGrade = this.grades[grade]
    if (studentsInGrade) {
      studentsInGrade.push(student)
    } else {
      this.grades[grade] = [student]
    }
    this.sort()
  }

  private sort(): void {
    this.grades = Object.keys(this.grades).sort().reduce((grades, grade) => {
      (grades as any)[grade] = (this.grades as any)[grade].sort()
      return grades
    }, {})
  }

  private getStudentGrade(student: string): number | null {
    const grade = Object.keys(this.grades).find(grade => (this.grades as any)[grade].includes(student))
    return grade ? parseInt(grade) : null
  }
}
