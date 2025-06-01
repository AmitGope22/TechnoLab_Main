import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './services/email.service';
import { WebDesignCourseComponent } from './components/web-design-course/web-design-course.component';
import { HardwareNetworkingCourseComponent } from './components/hardware-networking-course/hardware-networking-course.component';
import { AcFridgeRepearingComponent } from './components/ac-fridge-repearing/ac-fridge-repearing.component';
import { MobileRepearingComponent } from './components/mobile-repearing/mobile-repearing.component';
import { TvComputerRepearingComponent } from './components/tv-computer-repearing/tv-computer-repearing.component';
import { ComputerTrainingComponent } from './components/computer-training/computer-training.component';
import { OnlineApplicationComponent } from './components/online-application/online-application.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminPanelComponent,
    AdminLoginComponent,
    ContactComponent,
    AboutComponent,
    CoursesComponent,
    WebDesignCourseComponent,
    HardwareNetworkingCourseComponent,
    AcFridgeRepearingComponent,
    MobileRepearingComponent,
    TvComputerRepearingComponent,
    ComputerTrainingComponent,
    OnlineApplicationComponent,
    PageNotfoundComponent,
    StudentRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
