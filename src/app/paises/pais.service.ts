import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from './interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  //base url
  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Countries[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Countries[]>(url);
  }
  detallePais(termino:string):Observable<Countries[]>{
    const url = `${ this.apiUrl }/alpha/${ termino }`;
    return this.http.get<Countries[]>(url);
  }
}
