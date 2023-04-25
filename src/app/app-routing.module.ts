import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ByCountryComponent } from './components/by-country/by-country.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'country/:name',
    component: ByCountryComponent
  },
  {
    path: "home",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
