import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { CuestionarioComponent } from './questionarios/cuestionario/cuestionario.component';
import { DetalleRespuestaComponent } from './questionarios/estadisticas/detalle-respuesta/detalle-respuesta.component';
import { EstadisticasComponent } from './questionarios/estadisticas/estadisticas.component';
import { NuevoCuestionariosComponent } from './questionarios/nuevo-cuestionarios/nuevo-cuestionarios.component';
import { PasoDosComponent } from './questionarios/nuevo-cuestionarios/paso-dos/paso-dos.component';
import { PasoUnoComponent } from './questionarios/nuevo-cuestionarios/paso-uno/paso-uno.component';
import { QuestionariosComponent } from './questionarios/questionarios.component';

const routes: Routes = [
  {path:"", component:QuestionariosComponent},
    {path:"cambiarPassword", component:CambiarPasswordComponent},
    {path:"vercuestionario/:id", component:CuestionarioComponent},
    {path:"estadisticas/:id", component:EstadisticasComponent},
    {path:"detalleRespuesta/:id", component:DetalleRespuestaComponent},
    {path:"nuevoCuestionario", component:NuevoCuestionariosComponent,children:[
      {path:"pasoUno", component:PasoUnoComponent},
      {path:"pasoDos", component:PasoDosComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
