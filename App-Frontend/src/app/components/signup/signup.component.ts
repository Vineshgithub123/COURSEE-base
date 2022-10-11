import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfessorService } from 'src/app/services/professor.service';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    email:"",
    username:"",
    password:"",
    role:"",
 
  }
  passwordMatch=""
  flag:boolean=false;
   showMsg: Boolean=false;
    form:FormGroup|any;
    constructor(private fb:FormBuilder,public auth:AuthService,
      public route:Router){}
  
 signup(){
  this.auth.signup(this.user).subscribe((res)=>{
console.log(this.user)
    if(res.status){
      this.route.navigate(['login'])
     }else{
      alert("Email already taken")
      window.location.reload();
     };
  });
};
  ngOnInit() {
    this.form=new FormGroup({
      fname:new FormControl('', Validators.required),
      email:new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password:new FormControl('',Validators.required),
      role:new FormControl('',Validators.required),
    },
      )
    
  }


}