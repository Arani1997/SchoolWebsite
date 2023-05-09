import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ AuthService]
})
export class LoginComponent {
  users: any[] = [];
  

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  form1 = new FormGroup({
    username1: new FormControl('', [Validators.required, Validators.minLength(3)]),
    regpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmpassword:new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  form3 = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private authService: AuthService, private router: Router) {

  }
  
  ngOnInit() {
     this.authService.Data.subscribe((data) => {
      this.users = data;
    });
}

  onSubmit() {
    const username = this.form.controls.username.value;
    const password = this.form.controls.password.value;

    // if (this.authService.authenticate(username, password)) {
    //   this.router.navigate(['/success']);
    // } else {
    //   alert('Authentication failed');
    // }
  }
  username1 = this.form1.controls.username1.value;
  password1 = this.form1.controls.regpassword.value;

  Submit() {
    this.authService.addUser(this.username1, this.password1);
    
  }

  get f() {
    return this.form.controls;
  }

  get f1() {
    return this.form1.controls;
  }

 
}
