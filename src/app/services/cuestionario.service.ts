import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cuestionario } from '../models/cuestionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  myAppUrl:string;
  myApiUrl:string;

  tituloCuestionario:string = '';
  descriptionCuestionario:string = '';

  constructor(private http:HttpClient) { 
    this.myAppUrl=environment.endpoint;
    this.myApiUrl='/api/Cuestionario/';
  }

  guardarCuestionario(cuestionario:Cuestionario): Observable<any>{
    return this.http.post(this.myAppUrl+this.myApiUrl,cuestionario);
  }

  getListCuestionarioByUser():Observable<any>{
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}GetListCuestionarioByUser`);
  }

  deleteCuestionario(id:number):Observable<any>{
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  getCuestionario(id:number):Observable<any>{
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  getListCuestionarios():Observable<any>{
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}GetListCuestionarios`);
  }
}
