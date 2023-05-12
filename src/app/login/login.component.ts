import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: any[] = [];

    form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });

    form1 = new FormGroup({
    regno:new FormControl('', [Validators.required, Validators.pattern(/^\d{4}$/)]),
    username1: new FormControl('', [Validators.required, Validators.minLength(3)]),
    regpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmpassword:new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  form2 = new FormGroup({
    username2: new FormControl('', [Validators.required,Validators.minLength(3)]),
    newpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmnewpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  form3 = new FormGroup({
    username3: new FormControl('', [Validators.required]),
    oldpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    resetnewpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    resetconfirmpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
 
   constructor(private authService: AuthService, private router: Router,private sharedService: SharedService) { }
  
  ngOnInit() {
    
}

  onSubmit() {
    const username = this.form.controls.username.value;
    const password = this.form.controls.password.value;
    const email = this.form.controls.email.value;
       this.authService.authenticate(username,password,email);
      this.authService._jsonData$.subscribe((data) => {
      this.users = data;
   this.sharedService.username = username;
console.log(this.users);
       });

  }
  username1 = this.form1.controls.username1.value;
  password1 = this.form1.controls.regpassword.value;

  Submit() {
    const regno = this.form1.controls.regno.value;
   const username = this.form1.controls.username1.value;
    const password = this.form1.controls.regpassword.value;
    const email = this.form1.controls.email.value;
    
    console.log(username, password,email);
    
    this.authService.addUser(regno,username, password,email);
    this.authService._jsonData$.subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
    
  }
  submitForm(){
    const username = this.form2.controls.username2.value;
    const newpassword = this.form2.controls.newpassword.value;
    const confirmnewpassword = this.form2.controls.confirmnewpassword;
    
    this.authService.resetforgotpassword(username,newpassword)
    {
      this.authService._jsonData$.subscribe((data) => {
        this.users = data;
        console.log(this.users);
      })
    }
  }
  ChangePasswordForm(){
    const username=this.form3.controls.username3.value;
    const oldpassword = this.form3.controls.oldpassword.value;
    const resetnewpassword = this.form3.controls.resetnewpassword.value;
    const resetconfirmpassword = this.form3.controls.resetconfirmpassword;
    
    this.authService.changePassword(username, oldpassword,resetnewpassword)
    {
      if (resetnewpassword !== resetconfirmpassword) {
        alert('New password and confirm password should be same.');
      } else {
        this.authService.changePassword(username, oldpassword,resetnewpassword);
      }
      this.authService._jsonData$.subscribe((data) => {
        this.users = data;
        console.log(this.users);
      })
    }
  }
  get f() {
    return this.form.controls;
  }

  get f1() {
    return this.form1.controls;
  }
  get f2() {
    return this.form2.controls;
  }
  get f3() {
    return this.form3.controls;
  }
  
}