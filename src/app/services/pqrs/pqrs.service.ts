import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';
import { pqrs } from 'src/app/models/pqrs';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {
  URL = 'http://localhost:3000/pqrs/'; 
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.token}`,
    }),
  }
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }
  getUsers(): Observable<any> {
    return this.http.get(this.URL,this.httpOptions);
  }

  getPqrsById(id:string): Observable<any> {
    return this.http.get(this.URL + id,this.httpOptions)
  }
  getPqrsByUser(id:string): Observable<any> {
    return this.http.get(this.URL+ 'pqrsByUser/' + id,this.httpOptions)
  }

  createNewpqrs(pqrs: pqrs): Observable<any> {
    return this.http.post(this.URL,pqrs, this.httpOptions)
  }

  updatePqrsById(id: string, pqrs:pqrs): Observable <any> {
    return this.http.put(this.URL + id, pqrs, this.httpOptions);
  }

  deletePqrs(id:string): Observable <any> { 
    return this.http.delete(this.URL + id, this.httpOptions);
  }
  
  TKValidations():boolean{
    if(this.jwtHelper.isTokenExpired(this.token) && !localStorage.getItem('token')) return false;
    return true; 
  }
}
