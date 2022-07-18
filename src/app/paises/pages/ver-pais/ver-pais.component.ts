import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Countries } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(private routerActive:ActivatedRoute,
    private servicio:PaisService ) { }

  pais:Countries[]=[];
  ngOnInit(): void {

    this.routerActive.paramMap.subscribe(
      param=>{
        let id=param.get('id');
        this.servicio.detallePais(String(id)).subscribe(
          resp=>{
            console.log(resp);
            this.pais=resp;
          }
        );
      }
    );
    }
  }
