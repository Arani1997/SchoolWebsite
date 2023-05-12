import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { AuthService } from './../auth.service';
import {Student} from './../Models/Student';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 
  user: any[] = [];

  getuser:any;
  constructor(private sharedService: SharedService,private authService:AuthService) { }

  ngOnInit(): void {
    //this.username = this.sharedService.username;
   
    this.getuser = this.authService.userViewDetails();
    this.authService.Dataa.subscribe((data) => {
    this.user = data;
    console.log(this.getuser);

    }
    
    ); 
  }

}
