import { Student } from "./student";

export class StudentService{

  students:Student[]= [
    new Student(6750, "Onan Icharia", 10000),
    new Student(6720, "Jid Kimachia", 100),
    new Student(6742, "Victor Kariuki", 500),
    new Student(6750, "Gerald Mbugua", 0),
  ]

  public getStudents() {
    return this.students
  }

  public addStudent(studentID:number, name: string, balance: number) {
    let newStudent = new Student(studentID, name, balance)
    this.students.push(newStudent)
  }

}