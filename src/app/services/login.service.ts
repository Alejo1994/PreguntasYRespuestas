import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = "/api/Login";
   }

   login(usuario:Usuario): Observable<any>{
     return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
   }

   setLocalStorage(data:any):void{
     localStorage.setItem('token', data);
   }

   getNombreUsuario():string {
     var nombreUsuario = localStorage.getItem('token');
     return nombreUsuario ? nombreUsuario : '';
   }

   getTokenDecoded():any{

    var token = localStorage.getItem('token');
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(token?token:'');

    return decodedToken;
   }

   removeLocalStorage():void{
     localStorage.removeItem('token');
   }

   getToken():string{
      return localStorage.getItem('token') as string;
   }
}
