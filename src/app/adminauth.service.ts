import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Student } from './Models/Student';
@Injectable({
  providedIn: 'root'
})
export class AdminauthService {
  _jsonstudentData$: BehaviorSubject<Array<Student>> = new BehaviorSubject<Array<Student>>([]);
  Data = this._jsonstudentData$.asObservable();
  constructor() { }
  // public getMySubject() {
  //   return this._jsonstudentData$;
  // }
  // public addStudent(regno:string,name: string,email: string,address:string, phonenumber:number,fathername: string, mothername: string,parentPhonenumber:number) {
    
   
  //   let existingData = this._jsonstudentData$.getValue();
  //   existingData.push(<Student>{regno:regno,name:name, email:email, address: address,phonenumber:phonenumber, fatherName: fathername, motherName: mothername,parentPhonenumber:parentPhonenumber});
  //   this._jsonstudentData$.next(existingData);
  //  // this.router.navigate(['/home']);
    
  // }
}
