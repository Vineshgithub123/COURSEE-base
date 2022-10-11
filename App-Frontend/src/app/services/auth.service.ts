import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  signup(data:any){
    return this.http.post<any>('http://localhost:3000/auth/signup',{data:data})

  }
   studentlogin(data:any){
    return this.http.post<any>('http://localhost:3000/auth/studentlogin',{data:data})

  }
  professorlogin(data:any){
    return this.http.post<any>('http://localhost:3000/auth/professorlogin',{data:data})

  }
    getToken(){
    return localStorage.getItem("token")
  }

  gettokens(){
    return localStorage.getItem("tokens")

  }

  studentloggedIn(){
    return !!localStorage.getItem('token')
  }

  professorloggedIn(){
    return !!localStorage.getItem("tokens")
  }

  verifieduser(id:any){
    return this.http.post('http://localhost/3000/student/checkverified',{id:id}).subscribe((data)=>{
     sessionStorage.setItem('verified','true');
    });

  }

  userverified(){
    return !!sessionStorage.getItem('verified');
  }
}
