import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CuestionarioService } from '../../../../../services/cuestionario.service';

@Component({
  selector: 'app-paso-uno',
  templateUrl: './paso-uno.component.html',
  styleUrls: ['./paso-uno.component.css']
})
export class PasoUnoComponent implements OnInit {

  datosCuestionario: FormGroup;

  constructor(private fb:FormBuilder,
              private router:Router,
              private cuestionarioServices: CuestionarioService) {

    this.datosCuestionario = fb.group({
      titulo:['',Validators.required],
      descripcion:['',Validators.required]
    });

  }

  ngOnInit(): void {
  }

  pasoUno():void{

    this.cuestionarioServices.tituloCuestionario = this.datosCuestionario.value.titulo;
    this.cuestionarioServices.descriptionCuestionario=this.datosCuestionario.value.descripcion;

    this.router.navigate(['/dashboard/nuevoCuestionario/pasoDos']);
  }
}
