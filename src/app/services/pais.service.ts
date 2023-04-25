import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Pais } from '../models/pais.interface';
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  ruta_main:string="https://restcountries.com/v3.1"
  recurso_todo = 'all'
  recurso_name = 'name'
  recurso_alpha = 'alpha'

  constructor(private http: HttpClient) { }

  obtenerPaises(){
    return this.http.get<Pais[]>(this.ruta_main + '/' + this.recurso_todo);
  }

  obtenerPaisNombre(name: string){
    return this.http.get<any>(this.ruta_main + '/' + this.recurso_name + '/' + name);
  }

  obtenerPaisCode(code: string){
    return this.http.get<any>(this.ruta_main + '/' + this.recurso_alpha + '/' + code);
  }
}
