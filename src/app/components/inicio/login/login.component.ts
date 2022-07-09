import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../models/usuario';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  login:FormGroup;
  loading:boolean = false;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private router: Router,
              private loginService: LoginService) {
    this.login = this.fb.group({
      usuario: ['',Validators.required],
      password:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  log():void{

    const usuario : Usuario={
      nombreUsuario:this.login.value.usuario,
      password:this.login.value.password
    };

    this.loading = true;

    this.loginService.login(usuario).subscribe(data=>{
      this.loading = !this.loading;
      this.router.navigate(['/dashboard']);
      this.loginService.setLocalStorage(data.token);
    }, error =>{
      this.loading =!this.loading;
      this.toastr.error(error.error.message,'Error');
      this.login.reset();
    })

   /* setTimeout(()=>{
      if(usuario.nombreUsuario === 'alejo' && usuario.password === 'admin'){
        this.login.reset();
        this.router.navigate(['/dashboard']);
      }else{
        this.toastr.error('Usuario o contraseña incorrecto','Error');
        this.login.reset();
      }
      this.loading= false;
    },3000);
*/
  }
}
