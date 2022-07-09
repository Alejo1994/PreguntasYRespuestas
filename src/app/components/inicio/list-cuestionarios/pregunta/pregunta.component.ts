import { Component, OnInit } from '@angular/core';
import { RespuestaCuestionarioService } from '../../../../services/respuesta-cuestionario.service';
import { CuestionarioService } from '../../../../services/cuestionario.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { RespuestaCuestionarioDetalle } from '../../../../models/respuestaCuestionarioDetalle';
import { RespuestaCuestionario } from 'src/app/models/respuestaCuestionario';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  idCuestionario:number = -1;
  listPreguntas: Pregunta[]=[];
  loading: boolean=false;
  rtaConfirmada =false;
  opcionSeleccionada: any;
  index=0;
  idRespuestaSeleccionada:number=-1;

  listRespustaDetalle: RespuestaCuestionarioDetalle[]=[];

  constructor(private respuestaCuestionarioServices: RespuestaCuestionarioService,
              private cuestionarioService:CuestionarioService,
              private toastr:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.idCuestionario= this.respuestaCuestionarioServices.idCuestionario;
    
    if(this.idCuestionario) this.router.navigate(['/inicio']);
    
    this.getCuestionario();
    this.respuestaCuestionarioServices.respuestas = [];
  }

  getCuestionario():void{
    this.loading=true;
    this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(data=>{
      this.listPreguntas=data.listPreguntas;
      this.loading=false;
      this.respuestaCuestionarioServices.cuestionario = data;
    },error=>{
      console.log(error);
    })
  }

  obtenerPregunta():string{
    return this.listPreguntas[this.index].descripcion;
  }

  getIndex():number{
      return this.index;
  }

  respuestaSeleccionada(respuesta:any):void{
    this.opcionSeleccionada = respuesta;
    this.rtaConfirmada = true;
    this.idRespuestaSeleccionada=respuesta.id;
  }

  addClassOption(respuesta:any):string{
    if(respuesta === this.opcionSeleccionada){
      return 'active text-light';
    }
    return '';
  }

  siguiente(): void {

    this.respuestaCuestionarioServices.respuestas.push(this.idRespuestaSeleccionada);

    //Creamos un objeto respusetaDetalle
    const detalleRespuesta:RespuestaCuestionarioDetalle={
      respuestaId: this.idRespuestaSeleccionada
    };

    // agregamos objeto al array
    this.listRespustaDetalle.push(detalleRespuesta);


    this.rtaConfirmada =false;
    this.index++;
    this.idRespuestaSeleccionada = -1;

    if(this.index === this.listPreguntas.length){
      //this.router.navigate(['incio/respuestaCuestionario']);
      this.guardarRespuestaCuestionario();
    }
  }

  guardarRespuestaCuestionario():void{
    const rtaCuestionario: RespuestaCuestionario={
      cuestionarioId: this.respuestaCuestionarioServices.idCuestionario,
      nombreParticipante:this.respuestaCuestionarioServices.nombreParticipante,
      listRtaCuestionarioDetalle: this.listRespustaDetalle,
      fecha: new Date()
    };
    this.loading=true;
    this.respuestaCuestionarioServices.guardarRespuestaCuestionario(rtaCuestionario).subscribe(data=>{
     this.loading=false;
      this.router.navigate(['incio/respuestaCuestionario']);
    },error=>{
      this.loading=false;
      console.log(error);
    });
  }


}
