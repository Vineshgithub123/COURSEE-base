import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-approved-students',
  templateUrl: './approved-students.component.html',
  styleUrls: ['./approved-students.component.css']
})
export class ApprovedStudentsComponent implements OnInit {
  studentData=
  [{
    email:"",
    username:"",
    qualification:"",
    course:"",
  
  }]

  constructor(private professorService:ProfessorService) { }
  rejectstudent(id: any){
    if(confirm(`Are you sure Want to Delete ${id.username}`)){
    this.professorService.rejectapprovedstudent(id._id).subscribe((data)=>{
      this.studentData=this.studentData.filter(p=>p!==id)
    })
   }
  }
  ngOnInit(): void {
    this.professorService.getapprovedstudent().subscribe((data)=>{
      this.studentData = JSON.parse(JSON.stringify(data))
    })
  }

}
