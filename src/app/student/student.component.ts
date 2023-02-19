import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students: Student[] = [];
  studentService;

  constructor(){
    this.studentService = new StudentService()
  }

  getStudents(){
    this.students= this.studentService.getStudents()
  }

  addStudents(studentID:number, name: string, balance:number) {
    this.studentService.addStudent(studentID,name,balance)
  }
}
