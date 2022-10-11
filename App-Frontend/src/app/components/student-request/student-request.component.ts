import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-student-request',
  templateUrl: './student-request.component.html',
  styleUrls: ['./student-request.component.css']
})
export class StudentRequestComponent implements OnInit {

  studentData=
  [{
    email:"",
    username:"",
    qualification:"",
    course:"",
  }]

  constructor(private professorService:ProfessorService, private route:Router) { }
  rejectstudent(id: any){
    if(confirm(`Are you sure Want to delete ${id.username}`)){
    this.professorService.rejectstudent(id._id).subscribe((data)=>{
      this.studentData=this.studentData.filter(p=>p!==id)
    })
   }
  }

  approvestudent(id:any){
    localStorage.setItem("uid" , id._id)
    this.route.navigate(["/pro-dash/approvestudents"])
  }
  ngOnInit(): void {
    this.professorService.getrequest().subscribe((data)=>{
      this.studentData=JSON.parse(JSON.stringify(data))

    })
  }

}
