import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  cambiarPassword: FormGroup;
  loading:boolean = false;

  constructor(private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private toastr: ToastrService,
              private router: Router) {
    this.cambiarPassword = this.fb.group({
      passwordAnterior: ['',Validators.required],
      nuevoPassword:['',[Validators.required, Validators.minLength(4)]],
      confirmPassword:[]
    },{validator: this.checkPassword});
   }

  ngOnInit(): void {
  }

  checkPassword( group: FormGroup): any{
    let pass = group.controls['nuevoPassword'].value;
    let confirm = group.controls['confirmPassword'].value;
    return pass === confirm ? null : {notSame: true};
  }

  guardarPassword():void{
    console.log("Guardar Password");

    let changePassword: any ={
      passwordAnterior: this.cambiarPassword.value.passwordAnterior,
      nuevaPassword: this.cambiarPassword.value.nuevaPassword
    }
    this.loading = true;
    this.usuarioService.changePassword(changePassword).subscribe(data=>{
      this.loading = !this.loading;
      this.toastr.info(data.message);
      this.router.navigate(['/dashboard']);
    }, error=>{
      this.loading = !this.loading;
      this.toastr.error(error.error.message,"Error!");
      this.cambiarPassword.reset();
    });
  }

}
