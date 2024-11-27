import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TareasRoutingModule} from './tareas-routing.module';
import {TareasAppComponent} from "./tareas-app.component";
import {HeaderAppModule} from "../header-app/header-app.module";
import {IonicModule} from "@ionic/angular";
import {CategoriaModalComponent} from "../categorias-app/categoria-modal/categoria-modal.component";
import {TareasModalComponent} from "./tareas-modal/tareas-modal.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [TareasAppComponent, TareasModalComponent],
  imports: [
    CommonModule,
    TareasRoutingModule,
    HeaderAppModule,
    IonicModule,
    FormsModule
  ]
})
export class TareasModule {
}
