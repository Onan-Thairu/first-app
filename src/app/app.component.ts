import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle = 'School Fees Management System';
  studentID: string = ''
  name:string = ''
  balance: string = ''

  students: Student[] = [];
  studentService;

  constructor(){
    this.studentService = new StudentService()
  }

  getStudents(){
    this.students= this.studentService.getStudents()
  }

  addStudent(studentID:number, name: string, balance:number) {
    this.studentService.addStudent(studentID,name,balance)
  }
}
