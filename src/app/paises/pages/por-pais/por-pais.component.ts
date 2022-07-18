import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino:string = "";
  existeError:boolean=false;
  paises:Countries[]=[];

  constructor(private servicio:PaisService) { }

  ngOnInit(): void {
  }

  buscar():void{

    this.servicio.buscarPais(this.termino).subscribe(
      resp=>{
        console.log(resp);
        this.paises=resp;
        this.existeError=false;
      },(err)=>{
        console.log(err);
        this.existeError =true;
      }
    );
  }

}
