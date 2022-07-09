import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { CuestionarioService } from '../../../services/cuestionario.service';
import { ToastrService } from 'ngx-toastr';
import { Cuestionario } from '../../../models/cuestionario';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-questionarios',
  templateUrl: './questionarios.component.html',
  styleUrls: ['./questionarios.component.css']
})
export class QuestionariosComponent implements OnInit {
  nombreUsuario:string;
  listCuestionarios: Cuestionario[]=[];
  loading: boolean = false;

  constructor(private loginService: LoginService,
              private cuestionarioService: CuestionarioService,
              private toastr: ToastrService) {
    this.nombreUsuario = '';
   }

  ngOnInit(): void {
    this.getNombreUsuario();
    this.getCuestionarios();
  }

  getNombreUsuario():void{
    this.nombreUsuario = this.loginService.getTokenDecoded().sub;
  }

  getCuestionarios():void{
    this.loading = true;
    this.cuestionarioService.getListCuestionarioByUser().subscribe(data=>{
     this.loading =false;
      this.listCuestionarios=data;
    },error=>{
      this.toastr.error('Oppss... ocurrio un error','Error!');
      console.log(error);
      this.loading =false;
    })
  }

  eliminarCuestionario(id:number):void{
    if(confirm('Esta seguro que desea eliminar el cuestionario')){
      this.loading=true;
      this.cuestionarioService.deleteCuestionario(id).subscribe(data=>{
        this.loading=false;
        this.toastr.success('El cuestionario fue eliminado con exito!','Registro eliminado');
        this.getCuestionarios();
      }, error=> {
        console.log(error);
        this.loading=false;
        this.toastr.error('Oppss... ocurrio un error','Error!');
      });
    }
  }

}
