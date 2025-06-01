import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AcFridgeRepearingComponent } from './components/ac-fridge-repearing/ac-fridge-repearing.component';
import { WebDesignCourseComponent } from './components/web-design-course/web-design-course.component';
import { HardwareNetworkingCourseComponent } from './components/hardware-networking-course/hardware-networking-course.component';
import { MobileRepearingComponent } from './components/mobile-repearing/mobile-repearing.component';
import { TvComputerRepearingComponent } from './components/tv-computer-repearing/tv-computer-repearing.component';
import { ComputerTrainingComponent } from './components/computer-training/computer-training.component';
import { OnlineApplicationComponent } from './components/online-application/online-application.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';


const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'contact' , component:ContactComponent},
  {path:'about' , component:AboutComponent},
  {path:'courses' , component:CoursesComponent},
  {path:'admin' , component:AdminPanelComponent},
  {path:'admin_login' , component:AdminLoginComponent},
  {path:'ac-fridge-repearing', component: AcFridgeRepearingComponent},
  {path:'web-design-course', component: WebDesignCourseComponent},
  {path:'hardware-networking-course', component: HardwareNetworkingCourseComponent},
  {path:'mobile-repearing' , component:MobileRepearingComponent},
  {path:'tv-computer-repearing' , component:TvComputerRepearingComponent},
  {path:'computer_training' , component:ComputerTrainingComponent},
  {path:'Appy-online' , component:OnlineApplicationComponent},
  {path:'page_not_found' , component:PageNotfoundComponent},
  {path:'View_registration' , component:StudentRegistrationComponent},


  {path:'admin' , component:AdminPanelComponent},
  {path:'admin_login' , component:AdminLoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
