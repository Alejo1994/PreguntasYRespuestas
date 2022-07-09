import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../../services/cuestionario.service';
import { ToastrService } from 'ngx-toastr';
import { Cuestionario } from '../../../models/cuestionario';
import { Router } from '@angular/router';
import { RespuestaCuestionarioService } from '../../../services/respuesta-cuestionario.service';

@Component({
  selector: 'app-list-cuestionarios',
  templateUrl: './list-cuestionarios.component.html',
  styleUrls: ['./list-cuestionarios.component.css']
})
export class ListCuestionariosComponent implements OnInit {

  loading:boolean= false;
  listCuestionarios: any[]=[];

  constructor(private cuestionarioService:CuestionarioService,
              private toastr: ToastrService,
              private router:Router,
              private respuestaCuestionario:RespuestaCuestionarioService) { }

  ngOnInit(): void {
  }

  getListCuestionarios():void{
    this.loading =true;
    this.cuestionarioService.getListCuestionarios().subscribe(data=>{
      this.loading=false;
      this.listCuestionarios=data;
    },error=>{
      this.loading=false;
      console.log(error);
      this.toastr.error('Oppss... Ocurrio un error','Error!');
    })
  }

  ingresarNombre(idCuestionario:number):void{
    this.respuestaCuestionario.idCuestionario =idCuestionario;
    this.router.navigate(['/inicio/ingresarNombre']);
  }

}
