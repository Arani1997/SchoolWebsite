import { Component, OnInit } from '@angular/core';
import { AdminauthService} from './../adminauth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-adminadduser',
  templateUrl: './adminadduser.component.html',
  styleUrls: ['./adminadduser.component.css']
})
export class AdminadduserComponent implements OnInit {
  students: any[] = [];
  studentform = new FormGroup({
    regno : new FormControl('', [Validators.required, Validators.pattern(/^\d{4}$/)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phonenumber:new FormControl(''),
    fathername:new FormControl(''),
    mothername:new FormControl(''),
    parentphonenumber:new FormControl(''),
  });
  constructor(private authService: AuthService, private router: Router,sharedService:SharedService) { }

  ngOnInit(): void {
  }
  Submit() {
    const regno=this.studentform.controls.regno.value;
    const name = this.studentform.controls.name.value;
     const email = this.studentform.controls.email.value;
     const address = this.studentform.controls.address.value;
     const phonenumber = this.studentform.controls.phonenumber.value;
     const fathername = this.studentform.controls.fathername.value;
     const mothername = this.studentform.controls.mothername.value;
     const parentphonenumber = this.studentform.controls.parentphonenumber.value;
    
     console.log(regno,name,email,address,phonenumber,fathername,mothername, parentphonenumber);
     
     this.authService.addStudent(regno,name,email,address,phonenumber,fathername,mothername, parentphonenumber);
    // this.sharedService.regno = this.regno;
     this.authService._jsonstudentData$.subscribe((data) => {
       this.students = data;
       console.log(this.students);
       
     });
     
   }

}
