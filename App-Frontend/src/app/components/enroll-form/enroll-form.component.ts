import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { ProfessorService } from 'src/app/services/professor.service';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-enroll-form',
  templateUrl: './enroll-form.component.html',
  styleUrls: ['./enroll-form.component.css']
})
export class EnrollFormComponent implements OnInit {

  x = localStorage.getItem('email')
  y = localStorage.getItem('username')

  courses=[{
    title:"",
    description:"",
    image:"",
  }]


  enrolldata={
    email:this.x,
    username:this.y,
    phonenumber:"",
    address:"",
    qualification:"",
    course:"",

  }
  constructor(private studentservice:StudentService, private router:Router) { }
  enroll(){
    this.studentservice.enrollstudent(this.enrolldata)
    alert("Sucessfully Registered")
    this.router.navigate(["/student"])

  }

  ngOnInit(): void {
    this.studentservice.coursecomponent().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })
    
  }

}
