import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Asistencia } from 'src/app/models/Asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  URL = 'http://localhost:3000/attendance';

  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.token}`,
    }),
  }
  constructor(private http:HttpClient, private jwtHelper: JwtHelperService) { }

  getAttendance(): Observable<any> {
    return this.http.get(this.URL,this.httpOptions);
  }

  getAttendanceById(id:string): Observable<any> {
    return this.http.get(this.URL + id,this.httpOptions)
  }

  createNewAttendance(asistencia: any[]): Observable<any> {
    return this.http.post(this.URL,asistencia, this.httpOptions)
  }
  updateAttendanceById(id: string, asistencia: Asistencia): Observable <any> {
    return this.http.put(this.URL + id, asistencia, this.httpOptions);
  }

  deleteAttendanceById(id:string): Observable <any> { 
    return this.http.delete(this.URL + id, this.httpOptions);
  }
  coutAnttendanceByid(id:number): Observable <any> {
    return this.http.get(this.URL + '/count/' + id, this.httpOptions);
  }
  sendEmailAdve(correo:any): Observable <any> {
    return this.http.post( 'http://localhost:3000/email',correo, this.httpOptions);
  }
  
  getReport(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/report/' + id, this.httpOptions)
  }


}
