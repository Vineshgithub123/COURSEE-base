import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
    sessionStorage.clear()
    this.route.navigate(["/login"])

  }

}
