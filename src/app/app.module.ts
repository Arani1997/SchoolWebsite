import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
//import { FooterComponent } from './footer/footer.component';
//import {MatIconModule} from '@angular/material/icon';

import { AboutusComponent } from './aboutus/aboutus.component';
import { OSAComponent } from './osa/osa.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { HomeComponent } from './home/home.component';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { AdminadduserComponent } from './adminadduser/adminadduser.component';
//import { AdminviewdetailsComponent } from './adminviewdetails/adminviewdetails.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminviewdetailsComponent } from './adminviewdetails/adminviewdetails.component';
import { AdmineditstudentComponent } from './admineditstudent/admineditstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PhotogalleryComponent,
    AboutusComponent,
    OSAComponent,
    LatestNewsComponent,
    HomeComponent,
    LoginComponent,
   SuccessComponent,
   RegistrationComponent,
   ProfileComponent,
   AdminadduserComponent,
  // AdminviewdetailsComponent,
   AdmindashboardComponent,
  AdminviewdetailsComponent,
  AdmineditstudentComponent,
 
  


  ],
  imports: [
    BrowserModule,
    
    //MatIconModule,
   // BrowserAnimationsModule,
    CarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
AppRoutingModule
  ],
   
  
 
  providers: [AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
