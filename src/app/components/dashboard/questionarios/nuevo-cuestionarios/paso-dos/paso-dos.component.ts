import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../../../../services/cuestionario.service';
import { Pregunta } from '../../../../../models/pregunta';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Cuestionario } from '../../../../../models/cuestionario';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit {


  tituloCuestionario:string='';
  descriptionCuestionario:string='';
  listPreguntas: Pregunta[]=[];
  loading:boolean = false;

  constructor(private cuestionarioServices: CuestionarioService,
              private toastr: ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.tituloCuestionario= this.cuestionarioServices.tituloCuestionario;
    this.descriptionCuestionario=this.cuestionarioServices.descriptionCuestionario;
  }

  guardarPregunta(pregunta:Pregunta):void{
    this.listPreguntas.push(pregunta);

  }

  eliminarPregunta(index:number):void{
    this.listPreguntas.splice(index,1);
  }

  guardarCuestionario():void{
    const cuestionario: Cuestionario = {
      nombre: this.tituloCuestionario,
      description: this.descriptionCuestionario,
      listPreguntas: this.listPreguntas
    };

    this.loading = true;

    this.cuestionarioServices.guardarCuestionario(cuestionario).subscribe(data=>{
      this.toastr.success('El cuestionario fue registrado con exito!','Cuestionario regitrado');
      this.router.navigate(['/dashboard']);
      this.loading = !this.loading;
    },error=>{
      this.toastr.error('Opps... ocurrio un error!!!','Error');
      this.router.navigate(['/dashboard']);
      this.loading = !this.loading;
    });

  }

}
