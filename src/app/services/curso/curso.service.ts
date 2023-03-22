import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Curso } from "src/app/models/Cursos";
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  URL = 'http://localhost:3000/courses/';
  
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.token}`,
    }),
  }

  constructor(private http:HttpClient, private jwtHelper: JwtHelperService) { }

  getCourses(): Observable<any> {
    return this.http.get(this.URL,this.httpOptions);
  }

  getCourseById(id:string): Observable<any> {
    return this.http.get(this.URL + id,this.httpOptions)
  }

  createNewCourse(course: Curso): Observable<any> {
    return this.http.post(this.URL,course, this.httpOptions)
  }
  updateCoursesById(id: string, course:Curso): Observable <any> {
    return this.http.put(this.URL + id, course, this.httpOptions);
  }

  deleteCourseById(id:string): Observable <any> { 
    return this.http.delete(this.URL + id, this.httpOptions);
  }

  getUserByIdCourse(id:string):Observable<any> {
    return this.http.get(this.URL + 'UserByCourses/' + id, this.httpOptions);
  }

  getAllCourseByUser(id:string):Observable<any> {
    return this.http.get('http://localhost:3000/dtll_cur_estu/CoursesByUser/' + id, this.httpOptions)
  }

  TKValidations():boolean{
    if(this.jwtHelper.isTokenExpired(this.token) && !localStorage.getItem('token')) return false;
    return true; 
  }
  //decodificacion del token para llamar la informacion\
  tknDecode(token:any){
    let tokenDecoded = this.jwtHelper.decodeToken(token);
    return tokenDecoded;
  }
}
