import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  enrollstudent(data:any){
    return this.http.post('http://localhost:3000/student/enrollstudent',data).subscribe((data)=>{
     console.log(data)
    })
   }
 
 
   messagedata(id:any){
     return this.http.get('http://localhost:3000/student/messagedata/'+id)
   }
 
   getprofile(id:any){
     return this.http.get('http://localhost:3000/student/profiledata/${id}')
 
   }
   coursecomponent(){
    return this.http.get<any>('http://localhost:3000/home/course')
  }
}
