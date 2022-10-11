import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

   

  constructor(private http:HttpClient) { }

  getCount(){
    return this.http.get('http://localhost:3000/professor/getcount')
   }
 
   getrequest(){
     return this.http.get('http://localhost:3000/professor/getrequest')
   }
 
   rejectstudent(id:any){
     return this.http.delete('http://localhost:3000/professor/deletreq/'+id)
   }
 
   rejectapprovedstudent(id:any){
     return this.http.delete('http://localhost:3000/professor/deletapproved/'+id)
   }
 
   approvestudent(id:any){
     return this.http.get('http://localhost:3000/professor/approvestudent/'+id)
   }
 
 
   approvedstudent(data:any){
     return this.http.post('http://localhost:3000/professor/approveddata',data).subscribe((data)=>{
      console.log(data)
     })
    }
 
    getapprovedstudent(){
     return this.http.get('http://localhost:3000/professor/getapproveddata')
    }
 
    bulknotification(data:any){
     return this.http.post('http://localhost:3000/professor/bulknotification',data)
    }
 
    addcourse(data:any){
      console.log(data);
     return this.http.post<any>('http://localhost:3000/professor/addcourse',{data}
     )
 
 
    }
}
