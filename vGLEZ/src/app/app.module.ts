import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TodoCaracteristicasComponent } from './todo/todo-caracteristicas/todo-caracteristicas.component';
import { CasaComponent } from './casa/casa.component';
import { MenuComponent } from './menu/menu.component';
import { PreciosComponent } from './precios/precios.component';
import { DomiciliosComponent } from './domicilios/domicilios.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoCaracteristicasComponent,
    CasaComponent,
    MenuComponent,
    PreciosComponent,
    DomiciliosComponent,
    DepartamentosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
