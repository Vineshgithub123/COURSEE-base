import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prof-nav',
  templateUrl: './prof-nav.component.html',
  styleUrls: ['./prof-nav.component.css']
})
export class ProfNavComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  btnclk(){
     localStorage.clear()
    this.route.navigate(["/adminlogin"])
  }
}
