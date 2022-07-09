import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { LoadingComponent } from './loading/loading.component';

// modulos
import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    LoadingComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
