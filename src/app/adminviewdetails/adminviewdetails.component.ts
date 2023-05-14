import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import {Student} from './../Models/Student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminviewdetails',
  templateUrl: './adminviewdetails.component.html',
  styleUrls: ['./adminviewdetails.component.css']
})
export class AdminviewdetailsComponent implements OnInit {
  users: any[] = [];
 
 // getstudent:any;
  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
   this.authService.adminViewDetails();
    this.authService.Dataa.subscribe((data) => {
      this.users = data;
      console.log(this.users);
  

  
  })
}

deleteUser(user: any) {
  const index = this.users.indexOf(user);
  if (index > -1) {
    this.users.splice(index, 1);
  }
}
getUser(regno: string) {
  this.router.navigate(['../adminedit', regno]);

}


}
