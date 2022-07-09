import { Component, OnInit } from '@angular/core';
import { Cuestionario } from '../../../../models/cuestionario';
import { RespuestaCuestionarioService } from '../../../../services/respuesta-cuestionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-respuesta-cuestionario',
  templateUrl: './respuesta-cuestionario.component.html',
  styleUrls: ['./respuesta-cuestionario.component.css']
})
export class RespuestaCuestionarioComponent implements OnInit {

  cuestionario?: Cuestionario;
  respuestaUsuario:number[]=[];

  constructor(private respusetaCuestionarioServices:RespuestaCuestionarioService,
              private router:Router) { }

  ngOnInit(): void {
    if(this.respusetaCuestionarioServices.idCuestionario==null){
      this.router.navigate(['/inicio']);
    }else{
      this.cuestionario = this.respusetaCuestionarioServices.cuestionario;
      this.respuestaUsuario=this.respusetaCuestionarioServices.respuestas;
      
    }

  }

}
