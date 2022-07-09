import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { DashboardRoutingModule } from './dashboard-routing.module';

// Components
import { LoginComponent } from '../inicio/login/login.component';
import { RegisterComponent } from '../inicio/register/register.component';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { QuestionariosComponent } from './questionarios/questionarios.component';
import { NuevoCuestionariosComponent } from './questionarios/nuevo-cuestionarios/nuevo-cuestionarios.component';
import { PasoUnoComponent } from './questionarios/nuevo-cuestionarios/paso-uno/paso-uno.component';
import { PasoDosComponent } from './questionarios/nuevo-cuestionarios/paso-dos/paso-dos.component';
import { NuevaPreguntaComponent } from './questionarios/nuevo-cuestionarios/paso-dos/nueva-pregunta/nueva-pregunta.component';
import { ListCuestionariosComponent } from '../inicio/list-cuestionarios/list-cuestionarios.component';
import { EstadisticasComponent } from './questionarios/estadisticas/estadisticas.component';
import { DetalleRespuestaComponent } from './questionarios/estadisticas/detalle-respuesta/detalle-respuesta.component';
import { CuestionarioComponent } from './questionarios/cuestionario/cuestionario.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CambiarPasswordComponent,
    QuestionariosComponent,
    NuevaPreguntaComponent,
    NuevoCuestionariosComponent,
    PasoUnoComponent,
    PasoDosComponent,
    CuestionarioComponent,
    EstadisticasComponent,
    DetalleRespuestaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
