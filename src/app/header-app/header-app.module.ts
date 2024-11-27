import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderAppComponent} from "./header-app.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [HeaderAppComponent],
  imports: [
    CommonModule, IonicModule, FormsModule
  ],
  exports: [HeaderAppComponent]
})
export class HeaderAppModule {
}
