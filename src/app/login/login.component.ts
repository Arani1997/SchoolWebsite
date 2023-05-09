import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import {Router} from '@angular/router';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

// formArray: any[] = [];
  jsonData:any=[{
    "username": "John",
    "password":1884

  },{
    "username": "Rani",
    "password":1885

  },
  {
    "username": "Karthi",
    "password":1886

  }]
 
  //formArray: any;
  
  constructor(private router: Router){
    // console.log(this.jsonData)
  }
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
 
 

  
  onSubmit(){
    const username = this.form.controls.username.value;
    const password = this.form.controls.password.value;
    const username1=this.form1.controls.username1.value;
   const regpassword=this.form1.controls.regpassword.value;
   
  //  for(let i=0;i<this.jsonData.length;i++){
  //   if(username==this.jsonData[i].username && password==this.jsonData[i].password)
  //   {
  //   this.router.navigate(['/success']);
  //   break;
  //   }
  //   }
  var filterdata = this.jsonData.filter((item: { username: any; }) => item.username == username)
  var i=0;
    if(username == filterdata[i].username && password == filterdata[i].password)
    {
      this.router.navigate(['/success']);
    }
    else{
      alert('authentification failed');
    }

  }


  

 Submit(){
  //  this.formArray.push(this.form1.value);
  // localStorage.setItem('formArray', JSON.stringify(this.formArray));
    this.jsonData.push({"username": this.form1.controls.username1.value,
    "password":this.form1.controls.regpassword.value})
}
// submitForm() {
//   email:String;
//   this.http.post('/api/reset-password', { email: this.form3.controls.email }).subscribe(
//     (response) => {
//       console.log(response);
//     },
//     (error) => {
//       console.error(error);
//     }
//   );
// }
get f(){
  return this.form.controls;
}
get f1(){
 return this.form1.controls;
 }


}
