import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {FormGroup,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin={

    email:"",
    password:"",
    role:"Professor"

  }
    form:FormGroup|any;
  activeModal: any;
  modalService: any;
  exampleModal: any;
  flag:boolean=false;
  role:any='admin';
  
  constructor (private auth:AuthService, private route:Router) { }

  
  ngOnInit(): void {
    this.form=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    },
      )
  }
  adminlogin(){
    this.auth.professorlogin(this.admin).subscribe((res)=>{

      if(res.status){
        localStorage.setItem('tokens' , res.tokens)
        localStorage.setItem('pname' , res.name)
        localStorage.setItem('pemail' , res.email)
        this.route.navigate(['/pro-dash/dash'])

       }else{
        console.log(res.data)
        var error = res.data
        this.flag=true
       }
    })
  }

}
