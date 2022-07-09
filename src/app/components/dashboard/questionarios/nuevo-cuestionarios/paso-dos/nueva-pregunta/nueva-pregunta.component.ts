import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Pregunta } from '../../../../../../models/pregunta';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from '../../../../../../models/respuesta';

@Component({
  selector: 'app-nueva-pregunta',
  templateUrl: './nueva-pregunta.component.html',
  styleUrls: ['./nueva-pregunta.component.css']
})
export class NuevaPreguntaComponent implements OnInit {
  nuevaPregunta:FormGroup;
  pregunta?: Pregunta;
  rtaCorrecta =0;
  @Output() enviarPregunta = new EventEmitter<Pregunta>();

  constructor(private fb: FormBuilder,
              private toastr: ToastrService) {

    this.nuevaPregunta=this.fb.group({
      titulo:['',Validators.required],
      respuestas: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.agregarRespuestaPorDefecto();
  }

  // Devuelve FormArray de repuestas
  get getRespuestas(): FormArray{
    return this.nuevaPregunta.get('respuestas') as FormArray;
  }

  // Agregar respuesta al array
  agregarRespuesta():void{
    this.getRespuestas.push(this.fb.group({
      description: ['',Validators.required],
      esCorrecta: 0
    }));
  }

  agregarRespuestaPorDefecto():void{
    this.agregarRespuesta();
    this.agregarRespuesta();
  }

  eliminarRespuesta(index:number): void{
    if(this.getRespuestas.length==2){
      this.toastr.error('Como minimo la pregunta debe contener 2 respuestas','Error!');
    }else{
      this.getRespuestas.removeAt(index);
    }
  }
  setRespuestaValida(index:number):void{
    this.rtaCorrecta = index;
  }

  agregarPregunta():void{
    //Obtenermos el titulo de la pregunta
    const descriptionPregunta = this.nuevaPregunta.get('titulo')?.value;
  
    //Obtenemos el array de respuestas
    const arrayRespuestas = this.nuevaPregunta.get('respuestas')?.value;

    // Creamos un array de respuestas
    const arrayRta: Respuesta[]=[];

    arrayRespuestas.forEach((element:any, index:number) => {
      const respuesta: Respuesta = new Respuesta(element.description, false);

      if(index === this.rtaCorrecta) respuesta.esCorrecta=true;

      arrayRta.push(respuesta);
    });

    const pregunta:Pregunta = new Pregunta(descriptionPregunta, arrayRta);

    this.enviarPregunta.emit(pregunta);
    this.reset();
  }

  reset():void{
    this.rtaCorrecta =0;
    this.nuevaPregunta.reset();
    this.getRespuestas.clear();
    this.agregarRespuestaPorDefecto();
  }

}
