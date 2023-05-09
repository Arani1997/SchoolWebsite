import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // jsonData:any=[{
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
  jsonData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  Data = this.jsonData.asObservable();
static userData:any[]=[];
  constructor() { }

  public authenticate(username: string, password: string) {
  
    
  }

  // public addUser(username: string, password: string) {
  //   AuthService.userData.push([ {"username": username}, {"password": password} ]);
  //   this.jsonData.next(AuthService.userData);
  // }
  public addUser(username: string, password: string) {
    const user = {"username": username, "password": password};
    AuthService.userData.push(user);
    this.jsonData.next(AuthService.userData);
  }
  
 
}
