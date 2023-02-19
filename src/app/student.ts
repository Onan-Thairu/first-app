export class Student {
  studentID:number
  name: string
  balance: number
  
  constructor(studentID:number, name:string, balance:number){
    this.studentID = studentID
    this.name = name
    this.balance = balance
  }
}