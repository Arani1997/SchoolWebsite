import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './Models/User';
import { Router } from '@angular/router';
import { Student } from './Models/Student';
import { AdminauthService} from './adminauth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  // _jsonData$:any=[{
  //   "username": "John",
  //   "password":"1884a"

  // },{
  //   "username": "Rani",
  //   "password":"1885b"

  // },
  // {
  //   "username": "Karthi",
  //   "password":"1886c"

  // }]
  _jsonstudentData$: BehaviorSubject<Array<Student>> = new BehaviorSubject<Array<Student>>([]);
  Dataa = this._jsonstudentData$.asObservable();


  _jsonData$: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>([]);
  isAuthenticated = new BehaviorSubject<boolean>(false);
  Authenticated = this.isAuthenticated.asObservable();

  IsadminLogged = new BehaviorSubject<boolean>(false);
  adminLogged = this.IsadminLogged.asObservable();

  Data = this._jsonData$.asObservable();
static userData:any[]=[];
 //Data1: any;


  constructor(private router: Router,private adminauthService: AdminauthService) {
    console.log(this._jsonData$.subscribe(d=>d))
   }
  public authenticate(username: string, password: string, email: string) {
    let existingData = this._jsonData$.getValue();
    //let data = [...existingData, { userName: username, password: password, email: email }];
    let user =existingData.find((item: { userName: any; }) => item.userName.toLowerCase() === username.toLowerCase());
    if (username.toLowerCase() === 'admin' && password === 'password' && email === 'admin@gmail.com'){
      this.isAuthenticated.next(true);
     // AuthService.isAuthenticated=true
      this.IsadminLogged.next(true);
      
      this.router.navigate(['/success']);
    } 
    else{
    if (user && user.password === password) {
      this.isAuthenticated.next(true);
      this.IsadminLogged.next(false);
      this.router.navigate(['/success']);

    } else {
      alert('Authentication failed');
    }
  }}
  private getAuthenticatedUser() {
    const existingData = this._jsonData$.getValue();
    const studentexistingData = this._jsonstudentData$.getValue();
    const isAuthenticated = this.isAuthenticated.getValue();
    console.log(isAuthenticated);
    if (isAuthenticated) {
      // Check if any student names match any existing usernames
      const authenticatedUser = existingData.find((item) => {
        return studentexistingData.some(
          (student) => student.regno.toLowerCase() === item.RegNo.toLowerCase()
        );
      });
  
      if (authenticatedUser) {
        console.log(authenticatedUser);
        return authenticatedUser;
      } else {
        console.log('Authentication failed');
        return null;
      }
    } else {
      return null;
    }
  }
  
  public resetforgotpassword(username: string, newpassword: string) {
    console.log('Existing data:', this._jsonData$.getValue());
    let existingData = this._jsonData$.getValue();
    let index = existingData.findIndex((item: { userName: any; }) => item.userName.toLowerCase() === username.toLowerCase());
    if (index !== -1) {
      existingData[index].password = newpassword;
      console.log('Updated data:', existingData);
      this._jsonData$.next(existingData);
      this.router.navigate(['/success']);
    } else {
      alert('User not found');
    }
  }

  public changePassword(username: string, oldPassword: string, newPassword: string) {
    let existingData = this._jsonData$.getValue();
    console.log('Existing data:', this._jsonData$.getValue());
    let user = existingData.find((item: { userName: any; }) => item.userName.toLowerCase() === username.toLowerCase());
    if (user && user.password === oldPassword) {
      user.password = newPassword;
      console.log('Updated data:', existingData);
      this._jsonData$.next(existingData);
      this.router.navigate(['/success']);
    } else {
      alert('Password change failed. Please check your old password and try again.');
    }
  }
  
  public addUser(regno:string,username: string, password: string, email: string) {
    let  StudentRegData = this._jsonstudentData$.getValue();
    let existingData = this._jsonData$.getValue();
    console.log(existingData)
  //   if(existingData.find((item: { email: any; }) => item.email === email)){
  //     alert('Email already exists');
  //     return;
  // }
    if(StudentRegData.find((item: { regno: any; }) => item.regno ===regno)){
    existingData.push(<User>{RegNo:regno,userName: username, password: password, email: email});
    this._jsonData$.next(existingData);
    this.router.navigate(['/home']);}
    else{
      alert('You cannot register');
    }
}
  public addStudent(regno:string,username: string,email: string,address:string, phonenumber:number,fatherName: string, motherName: string,parentPhonenumber:number) {
    let existingData = this._jsonstudentData$.getValue();
    existingData.push(<Student>{regno:regno,name: username, email:email, address: address,phonenumber:phonenumber, fatherName: fatherName, motherName: motherName,parentPhonenumber:parentPhonenumber});
    this._jsonstudentData$.next(existingData);
   // this.router.navigate(['/home']);
    }
  public logout() {
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }

  public userViewDetails(){
    const existingData = this._jsonstudentData$.getValue();
    const authenticatedUser = this.getAuthenticatedUser();
    let studentDetail = null;
    if(!!authenticatedUser){
      studentDetail = existingData.find(
        (item) => item.regno.toLowerCase() === authenticatedUser.RegNo.toLowerCase()
      );
    }
    return studentDetail;
 }

 
}

 