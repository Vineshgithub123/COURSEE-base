import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  courses=[{
    title:"",
    description:"",
    image:"",
  }]

 x = localStorage.getItem("pname")
  enrolldata={
    course:"",
    message:"",
    professor:this.x

  }
  constructor(private professorService:ProfessorService, private studentService:StudentService) { }
  messagealert(){
    this.professorService.bulknotification(this.enrolldata).subscribe((data:any)=>{
     if(data.status){
       alert("Sucessfully Generated Alert");
     }else{
       alert("Error");
     }
    })
    location.reload();
   }
  ngOnInit(): void {
    this.studentService.coursecomponent().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })
  }

}
