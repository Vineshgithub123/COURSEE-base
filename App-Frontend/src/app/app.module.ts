import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnrollComponent } from './components/enroll/enroll.component';
import { ApprovedStudentsComponent } from './components/approved-students/approved-students.component';
import { StudentRequestComponent } from './components/student-request/student-request.component';
import { ShowMessageComponent } from './components/show-message/show-message.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { ProfNavComponent } from './components/prof-nav/prof-nav.component';
import { ApproveStudentsComponent } from './components/approve-students/approve-students.component';
import { MessageComponent } from './components/message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from './services/student.service';
import { ProfessorService } from './services/professor.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CoursesComponent } from './components/courses/courses.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { StudenthomeComponent } from './components/studenthome/studenthome.component';
import { ProfhomeComponent } from './components/profhome/profhome.component';
import { EnrollFormComponent } from './components/enroll-form/enroll-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    NotificationComponent,
    DashboardComponent,
    EnrollComponent,
    ApprovedStudentsComponent,
    StudentRequestComponent,
    ShowMessageComponent,
    StudentDashboardComponent,
    ProfNavComponent,
    ApproveStudentsComponent,
    MessageComponent,
    AdminLoginComponent,
    CoursesComponent,
    AddcourseComponent,
    StudenthomeComponent,
    ProfhomeComponent,
    EnrollFormComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ProfessorService,
  StudentService,
    AuthService,

    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
