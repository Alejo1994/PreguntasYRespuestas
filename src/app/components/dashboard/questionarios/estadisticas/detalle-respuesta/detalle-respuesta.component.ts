import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespuestaCuestionarioService } from '../../../../../services/respuesta-cuestionario.service';
import { Cuestionario } from '../../../../../models/cuestionario';
import { RespuestaCuestionarioDetalle } from '../../../../../models/respuestaCuestionarioDetalle';
import { Respuesta } from '../../../../../models/respuesta';

@Component({
  selector: 'app-detalle-respuesta',
  templateUrl: './detalle-respuesta.component.html',
  styleUrls: ['./detalle-respuesta.component.css']
})
export class DetalleRespuestaComponent implements OnInit {

  idRespuesta:number;
  loading=false;
  cuestionario:Cuestionario;
  respuestas: RespuestaCuestionarioDetalle[]=[];

  constructor(private aRoute: ActivatedRoute,
              private respuestaCuestionarioServices: RespuestaCuestionarioService) { 
                this.idRespuesta =  parseInt(aRoute.snapshot.params['id']);
              }

  ngOnInit(): void {
    this.getListRespuestasYCuestanario();
  }

  getListRespuestasYCuestanario():void{
    this.loading=true;
    this.respuestaCuestionarioServices.getCuestionarioByIdRespuesta(this.idRespuesta).subscribe(data=>{
      this.loading=false;
      this.cuestionario=data.Cuestionario;
      this.respuestas=data.Respuestas;
    },error=>{
      console.log(error);
    });
  }

}
