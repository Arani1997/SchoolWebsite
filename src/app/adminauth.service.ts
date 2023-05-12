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
  public addStudent(regno:string,username: string,email: string,address:string, phonenumber:number,fatherName: string, motherName: string,parentPhonenumber:number) {
    
   
    let existingData = this._jsonstudentData$.getValue();
    existingData.push(<Student>{regno:regno,name: username, email:email, address: address,phonenumber:phonenumber, fatherName: fatherName, motherName: motherName,parentPhonenumber:parentPhonenumber});
    this._jsonstudentData$.next(existingData);
   // this.router.navigate(['/home']);
    
  }
}
