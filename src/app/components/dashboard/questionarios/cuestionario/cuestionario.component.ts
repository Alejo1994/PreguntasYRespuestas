import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuestionarioService } from '../../../../services/cuestionario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  idCuestionario:number;
  loading:boolean=false;
  cuestionario: any = {};
  constructor(private cuestionarioService: CuestionarioService,
              private aRoute: ActivatedRoute,
              private toastr: ToastrService) {
                this.idCuestionario = parseInt(this.aRoute.snapshot.params['id']);
               }

  ngOnInit(): void {
    this.getCuestionarios();
  }

  getCuestionarios():void{
    this.loading=true;
    this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(data=>{
      this.loading=false;
      console.log(data);
      this.cuestionario=data;
    },error=>{
      this.loading=false;
    })
  }

}
