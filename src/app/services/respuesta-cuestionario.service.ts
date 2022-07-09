import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cuestionario } from '../models/cuestionario';
import { HttpClient } from '@angular/common/http';
import { RespuestaCuestionario } from '../models/respuestaCuestionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RespuestaCuestionarioService {

  myAppUrl:string;
  myApiUrl:string;

  nombreParticipante:string;
  idCuestionario:number;
  respuestas:number[]=[];
  cuestionario?:Cuestionario;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/RespuestaCuestionario/';
   }

   guardarRespuestaCuestionario(respuestaCuestionario: RespuestaCuestionario): Observable<any>{
    return this.http.post(this.myAppUrl+this.myApiUrl,respuestaCuestionario);
   }

   getListCuestionarioRespuesta(idCuestionario:number):Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl+idCuestionario);
   }

   eliminarRespustaCuestionario(idRespuestaCuestionario: number):Observable<any>{
    return this.http.delete(this.myAppUrl+this.myApiUrl+idRespuestaCuestionario);
   }

   getCuestionarioByIdRespuesta(idRespuesta:number):Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl+'GetCuestionarioByIdRespuesta/'+idRespuesta);
   }
}
