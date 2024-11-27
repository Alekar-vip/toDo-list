import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import {CategoriasAppComponent} from "./categorias-app.component";
import {IonicModule} from "@ionic/angular";
import {CategoriaModalComponent} from "./categoria-modal/categoria-modal.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CategoriasAppComponent, CategoriaModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    CategoriasRoutingModule,
    FormsModule
  ]
})
export class CategoriasModule { }
