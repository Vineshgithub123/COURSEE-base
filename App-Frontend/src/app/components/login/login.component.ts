import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    email:"",
    password:"",
    role:"Student"
  }
  form:FormGroup|any;
  activeModal: any;
  modalService: any;
  exampleModal: any;

  flag:boolean=false;
  role:any='user';


  constructor(private auth:AuthService,private route:Router) {}
  ngOnInit() {
    this.form=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    },
      )
  }
  loginUser(){
    this.auth.studentlogin(this.user).subscribe((res)=>{

      if(res.status){
        localStorage.setItem('token' , res.token)
        localStorage.setItem('email' , res.email)
        localStorage.setItem('username' , res.username)
        this.route.navigate(['/stu-dash/dashboard'])

       }else{
        console.log(res.data)
        var error = res.data
        this.flag=true
       }


    })
  }

}
