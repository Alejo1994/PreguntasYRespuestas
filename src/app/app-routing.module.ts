import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionariosComponent } from './components/dashboard/questionarios/questionarios.component';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { NuevoCuestionariosComponent } from './components/dashboard/questionarios/nuevo-cuestionarios/nuevo-cuestionarios.component';
import { PasoUnoComponent } from './components/dashboard/questionarios/nuevo-cuestionarios/paso-uno/paso-uno.component';
import { PasoDosComponent } from './components/dashboard/questionarios/nuevo-cuestionarios/paso-dos/paso-dos.component';
import { CuestionarioComponent } from './components/dashboard/questionarios/cuestionario/cuestionario.component';
import { ListCuestionariosComponent } from './components/inicio/list-cuestionarios/list-cuestionarios.component';
import { IngresarNombreComponent } from './components/inicio/list-cuestionarios/ingresar-nombre/ingresar-nombre.component';
import { PreguntaComponent } from './components/inicio/list-cuestionarios/pregunta/pregunta.component';
import { RespuestaCuestionarioComponent } from './components/inicio/list-cuestionarios/respuesta-cuestionario/respuesta-cuestionario.component';
import { EstadisticasComponent } from './components/dashboard/questionarios/estadisticas/estadisticas.component';
import { DetalleRespuestaComponent } from './components/dashboard/questionarios/estadisticas/detalle-respuesta/detalle-respuesta.component';

// Guards
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {path: "", redirectTo:"/inicio", pathMatch:"full"},
  {path:"inicio", component: InicioComponent, children:[
    {path:"", component:BienvenidaComponent},
    {path:"login",component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:'listCuestionarios',component:ListCuestionariosComponent,
                              loadChildren:()=> import('./components/inicio/list-cuestionarios/list-cuestionarios.module')
                                                .then(x=>x.ListCuestionariosModule)},
  ]},
  {path:"dashboard", component: DashboardComponent, canActivate:[AuthGuard], 
                                loadChildren:()=> import('./components/dashboard/dashboard.module')
                                                  .then(x=>x.DashboardModule)},
  {path:'**', redirectTo:"/bienvenidos"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
