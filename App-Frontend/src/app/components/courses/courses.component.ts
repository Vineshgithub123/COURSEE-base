import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses=[{
    title:"",
    description:"",
    image:"",
  }]
  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
    this.studentservice.coursecomponent().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })
  }

}
