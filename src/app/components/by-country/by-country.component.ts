import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pais } from 'src/app/models/pais.interface';
import { PaisService } from 'src/app/services/pais.service';


@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent implements OnInit {
  name?: string = this.activedRouter.snapshot.params["name"];
  code?: string;
  paisSeleccionado: Pais = {
    "name": {
      "common": "",
      "official": ""
  },
  "fullname": "",
  "capital": "",
  "area": 0,
  "population": 0,
  "region":"",
  "subregion":"",
  "borders":[],
  "currencies":[],
  "tld":[],
  "flags": {
      alt:"",
      png:"",
      svg:""
  },
  }

  constructor(private activedRouter: ActivatedRoute, private router:Router, private paisService:PaisService) {}
  ngOnInit(): void {
    this.definirPais()
  }

  volverHome(){
    this.router.navigate(['/home'])
  }
  
  definirPais(){
    if(this.name){
      //this.name = this.activedRouter.snapshot.params["name"];
      this.paisService.obtenerPaisNombre(this.name).subscribe({
        next:(data)=>{
          this.paisSeleccionado.area=data[0].area;
          this.paisSeleccionado.capital=data[0].capital;
          this.paisSeleccionado.flags=data[0].flags;
          this.paisSeleccionado.fullname=data[0].fullname;
          this.paisSeleccionado.name=data[0].name;
          this.paisSeleccionado.population=data[0].population;
          this.paisSeleccionado.region=data[0].region;
          this.paisSeleccionado.subregion=data[0].subregion;
          this.paisSeleccionado.tld=data[0].tld;
          this.paisSeleccionado.currencies=data[0].currencies;
          this.paisSeleccionado.borders=data[0].borders;
        },
        error: (err)=>{
          console.log(err);
        }
      })
      this.name = undefined;
    } else if (this.code){
      this.paisService.obtenerPaisCode(this.code).subscribe({
        next:(data)=>{
          this.paisSeleccionado.area=data[0].area;
          this.paisSeleccionado.capital=data[0].capital;
          this.paisSeleccionado.flags=data[0].flags;
          this.paisSeleccionado.fullname=data[0].fullname;
          this.paisSeleccionado.name=data[0].name;
          this.paisSeleccionado.population=data[0].population;
          this.paisSeleccionado.region=data[0].region;
          this.paisSeleccionado.subregion=data[0].subregion;
          this.paisSeleccionado.tld=data[0].tld;
          this.paisSeleccionado.currencies=data[0].currencies;
          this.paisSeleccionado.borders=data[0].borders;
        },
        error: (err)=>{
          console.log(err);
        }
      })
      this.code = undefined;
    }
  }
  definirCode(border:string): void{
    this.code=border;
    this.definirPais();
  }
}
