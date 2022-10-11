import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ApproveStudentsComponent } from './components/approve-students/approve-students.component';
import { ApprovedStudentsComponent } from './components/approved-students/approved-students.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnrollComponent } from './components/enroll/enroll.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ProfNavComponent } from './components/prof-nav/prof-nav.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ClientGuardGuard } from './services/client-guard.guard';
import { AdminGuardGuard } from './services/admin-guard.guard';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { StudenthomeComponent } from './components/studenthome/studenthome.component';
import { ProfhomeComponent } from './components/profhome/profhome.component';
import { EnrollFormComponent } from './components/enroll-form/enroll-form.component';
import { StudentRequestComponent } from './components/student-request/student-request.component';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"adminlogin", component:AdminLoginComponent},
{path:"signup",component:SignupComponent},
{path:"pro-dash",canActivate:[AdminGuardGuard], component:ProfNavComponent,
children:[
  {path:"student-request",component:StudentRequestComponent},
  {path:"dash",component:ProfhomeComponent},
  {path:"notification",component:NotificationComponent},
  {path:"approvedstudents",component:ApprovedStudentsComponent},
  {path:"approvestudents", component:ApproveStudentsComponent},
  {path:"addcourse",component:AddcourseComponent},
]},
{path:"stu-dash",canActivate:[ClientGuardGuard], component:StudentDashboardComponent,
children:[
  {path:"dashboard",component:StudenthomeComponent},
 {path:"enroll",component:EnrollComponent},
 {path:"enroll-form",component:EnrollFormComponent},
 {path:"courses", component:CoursesComponent},
  {path:"message",component:MessageComponent}

]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
