import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaCuestionarioService } from '../../../../services/respuesta-cuestionario.service';

@Component({
  selector: 'app-ingresar-nombre',
  templateUrl: './ingresar-nombre.component.html',
  styleUrls: ['./ingresar-nombre.component.css']
})
export class IngresarNombreComponent implements OnInit {

  nombreParticipante:string = '';
  constructor(private router:Router,
              private respuestaCuestionarioServices:RespuestaCuestionarioService) { }

  ngOnInit(): void {
    if(this.respuestaCuestionarioServices.idCuestionario == null) this.router.navigate(['/inicio']);
  }

  siguiente():void{
    this.respuestaCuestionarioServices.nombreParticipante = this.nombreParticipante;
    this.router.navigate(['/inicio/pregunta']);
  }
}
