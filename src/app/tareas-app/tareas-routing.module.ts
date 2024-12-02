import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TareasAppComponent} from "./tareas-app.component";

const routes: Routes = [
  {
    path: '',
    component: TareasAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
