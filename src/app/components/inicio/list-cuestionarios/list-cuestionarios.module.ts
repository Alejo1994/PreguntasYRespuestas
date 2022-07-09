import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module
import { ListCuestionariosRoutingModule } from './list-cuestionarios-routing.module';
import { SharedModule } from '../../../shared/shared.module';

//Component
import { IngresarNombreComponent } from './ingresar-nombre/ingresar-nombre.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { RespuestaCuestionarioComponent } from './respuesta-cuestionario/respuesta-cuestionario.component';


@NgModule({
  declarations: [
    IngresarNombreComponent,
    PreguntaComponent,
    RespuestaCuestionarioComponent
  ],
  imports: [
    CommonModule,
    ListCuestionariosRoutingModule,
    SharedModule
  ],
  exports:[
    IngresarNombreComponent,
    PreguntaComponent,
    RespuestaCuestionarioComponent
  ]
})
export class ListCuestionariosModule { }
