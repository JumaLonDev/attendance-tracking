import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from "src/app/models/Usuario";
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL = 'http://localhost:3000/users/';

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

  getUserById(id:string): Observable<any> {
    return this.http.get(this.URL + id,this.httpOptions)
  }

  createNewUSer(user: Usuario): Observable<any> {
    return this.http.post(this.URL,user)
  }

  updateUserById(id: string, user:any): Observable <any> {
    return this.http.put(this.URL + id, user, this.httpOptions);
  }

  deleteUserById(id:string): Observable <any> { 
    return this.http.delete(this.URL + id, this.httpOptions);
  }

  login(datos:any): Observable <any>{
    return this.http.post(this.URL + 'login',datos)
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
