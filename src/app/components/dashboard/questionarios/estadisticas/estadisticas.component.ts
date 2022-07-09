import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespuestaCuestionarioService } from '../../../../services/respuesta-cuestionario.service';
import { RespuestaCuestionario } from '../../../../models/respuestaCuestionario';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  idCuestionario:number;
  loading=false;
  listRespuestaCuestionario: RespuestaCuestionario[]=[];

  constructor( private aRoute:ActivatedRoute,
              private respuestaCuestionarioService: RespuestaCuestionarioService,
              private toastr:ToastrService) { 
                this.idCuestionario= parseInt(this.aRoute.snapshot.params['id']);
              }

  ngOnInit(): void {
  }

  getListCuestionarioService():void{
    this.loading=true;
    this.respuestaCuestionarioService.getListCuestionarioRespuesta(this.idCuestionario).subscribe(data=>{
      this.loading=false;
      this.listRespuestaCuestionario=data;
      console.log(data);
    })
  }

  eliminarRespuestaCuestionario(idRtaCuestionario:number):void{
    this.loading=true;
    this.respuestaCuestionarioService.eliminarRespustaCuestionario(idRtaCuestionario).subscribe(data=>{
      this.loading=false;
      this.toastr.error("La respuesta al cuestionario fue eliminada con exito",'Registro eliminado!');
      this.getListCuestionarioService();
    }, error=>{
      console.log(error);
      this.loading=false;
    })
  }

}
