import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  dark_active:boolean = true;

  cambioMode():void{
    this.dark_active=!this.dark_active;
  }
}
