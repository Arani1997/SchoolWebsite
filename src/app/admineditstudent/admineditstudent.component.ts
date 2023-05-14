import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Student} from './../Models/Student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admineditstudent',
  templateUrl: './admineditstudent.component.html',
  styleUrls: ['./admineditstudent.component.css']
})
export class AdmineditstudentComponent implements OnInit {
  students: any[] = [];
  student!: Student;
  studentform = new FormGroup({
    regno : new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phonenumber:new FormControl(''),
    fathername:new FormControl(''),
    mothername:new FormControl(''),
    parentphonenumber:new FormControl(''),
  });
  s1: any;

 constructor(private route: ActivatedRoute,private authService:AuthService) { }
  ngOnInit(): void {
    this.authService.adminViewDetails();
    this.authService.Dataa.subscribe((data) => {
      this.students = data;
      console.log(this.students);
      this.route.params.subscribe(params => {
        const regno = params['regno'];
        console.log('Regno:', regno);
        const s1 = this.students.find(student => student.regno === regno);
        console.log('Student:', this.students);
        console.log('Student:', s1?.name);
        if (s1) { // check if s1 is not undefined before using it
          this.studentform.patchValue({
            regno: s1.regno,
            name: s1.name,
            email: s1.email,
            address: s1.address,
            phonenumber: s1.phonenumber,
            fathername:s1.fathername,
            mothername:s1.mothername,
            parentphonenumber:s1.phonenumber
          });
        }
        // use the regno value as needed
      });
  });
}  
onSubmit() {
  const regno = this.studentform.controls.regno.value;
  const name = this.studentform.controls.name.value;
  const email = this.studentform.controls.email.value;
  const address = this.studentform.controls.address.value;
  const phonenumber = this.studentform.controls.phonenumber.value;
  const fathername = this.studentform.controls.fathername.value;
  const mothername = this.studentform.controls.mothername.value;
  const parentphonenumber = this.studentform.controls.parentphonenumber.value;

  this.authService.updateStudentDetails(regno, name, email, address, phonenumber, fathername, mothername, parentphonenumber);
  
}
  }



