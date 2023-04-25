import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router } from '@angular/router';
import { Pais } from 'src/app/models/pais.interface';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  allCountrys!: Pais[];
  filtPaises!:Pais[];
  selectedValue!: string

  constructor (private pais_service: PaisService, private router:Router) {}
  ngOnInit(): void {
    this.CargarPaises();
  }
  CargarPaises(){
    this.pais_service.obtenerPaises().subscribe({
      next: (data) => {
        this.allCountrys=data;
        this.filtPaises=data;
        this.allCountrys.sort((a,b)=> a.name.common.localeCompare(b.name.common));
        this.filtPaises.sort();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  filterPaises(event:Event){
    let filtro = (event.target as HTMLInputElement).value;
    this.allCountrys = this.filtPaises.filter((pais)=> pais.name.common.toLowerCase().includes(filtro.toLowerCase()))
  }
  public onSelectChange(event: any): void {
    if(event.value!="All"){
      let filtro = event.value;
      this.allCountrys = this.filtPaises.filter((pais)=> pais.region.toLowerCase().includes(filtro.toLowerCase()))
    }else{
      this.allCountrys = this.filtPaises;
    }
  }
}
