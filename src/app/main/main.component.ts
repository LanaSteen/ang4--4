import { Component } from '@angular/core';
import { Student } from '../Models/Student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  student: Student = {
    name: '',
    age: null,
    grade: '',
    subjects: '',
    isEnrolled: false,
    address: {
      street: '',
      city: '',
      zip: ''
    }
  };
  forDisplayStudent?: Student
  studentArr: Student[] =[]


  resetStudent(){
    this.student.name = ""
    this.student.age = null
    this.student.grade = ""
    this.student.subjects = ""
    this.student.isEnrolled = false
    this.student.address.street = ""
    this.student.address.city = ""
    this.student.address.zip = ""
  }


  submit(){
    this.forDisplayStudent = {
      name:  this.student.name,
      age:  this.student.age,
      grade: this.student.grade,
      subjects:  this.student.subjects,
      isEnrolled:  this.student.isEnrolled,
      address: {
        street: this.student.address.street,
        city:  this.student.address.city,
        zip: this.student.address.zip
      }
    }

    this.studentArr.push(this.forDisplayStudent)
    // this.resetStudent()
    console.log(this.studentArr)
  }
}
