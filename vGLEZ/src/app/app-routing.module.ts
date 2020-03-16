import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoCaracteristicasComponent } from './todo/todo-caracteristicas/todo-caracteristicas.component';
import { CasaComponent } from './casa/casa.component';
import { PreciosComponent } from './precios/precios.component';


const routes: Routes = [
  {path: 'precios', component: PreciosComponent},
  {path: 'casa', component: CasaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
