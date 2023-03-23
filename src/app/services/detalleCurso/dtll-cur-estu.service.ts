import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class DtllCurEstuService {
  URL = 'http://localhost:3000/dtll_cur_estu';
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.token}`,
    }),
  }

  constructor(private http:HttpClient, private jwtHelper: JwtHelperService) { }

  SubscribeCurseByUserStudent(dataSubs : any):Observable<any> {
    return this.http.post(this.URL,dataSubs, this.httpOptions);
  }
}
