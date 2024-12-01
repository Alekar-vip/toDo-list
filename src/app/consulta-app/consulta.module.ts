import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRoutingModule } from './consulta-routing.module';
import {ConsultaAppComponent} from "./consulta-app.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ConsultaAppComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ConsultaRoutingModule
  ]
})
export class ConsultaModule { }
