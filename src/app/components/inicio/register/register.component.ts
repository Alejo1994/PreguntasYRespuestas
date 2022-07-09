import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../../models/usuario';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;

  loading:boolean=false;

  constructor(private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router,
              private toastr: ToastrService) {
    this.register= fb.group({
      usuario: ['',Validators.required],
      password:['',[Validators.required, Validators.minLength(4)]],
      password2:['']
    },{validator: this.checkPassword});
   }

  ngOnInit(): void {
  }

  registrarUsuario():void{
    console.log(this.register);

    const usuario: Usuario = {
      nombreUsuario : this.register.value.usuario,
      password: this.register.value.password
    }

    this.loading =true;
    this.usuarioService.saveUser(usuario).subscribe(data=> {
      this.loading = !this.loading;
      this.toastr.success(`El usuario ${usuario.nombreUsuario} fue registrado con exito!`, 'Usuario Registrado!');
      this.router.navigate(["/inicio/login"]);
    }, error=>{
      this.loading = !this.loading;
      this.register.reset();
      this.toastr.error(`${error.error.message}`,'Error');
    })
  }

  checkPassword( group: FormGroup): any{
    let pass = group.controls['password'].value;
    let confirm = group.controls['password2'].value;
    return pass === confirm ? null : {notSame: true};
  }

}
