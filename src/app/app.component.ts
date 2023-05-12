import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

//import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isLoggedIn = false;
  isadminLogged=false;
  router: any;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe((authenticated: boolean) => {
      this.isLoggedIn = authenticated;
    });
    this.authService.IsadminLogged.subscribe((adminLogged: boolean) => {
      this. isadminLogged =adminLogged ;
    });

  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
   }
  

