import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ProfessorService } from 'src/app/services/professor.service';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  courseData={
    course:"",
    message:"",
    imageurl:""
  }
  constructor(private professorservice:ProfessorService, private router:Router) { }

  ngOnInit(): void {
  }

  addCourse()
  {
    
      this.professorservice.addcourse(this.courseData).subscribe((data:any)=>{
        console.log(this.courseData)
        if(data.status){
      alert("Course Added ");
    }else{
      alert("Error");
    }
   })
 

  }

}
