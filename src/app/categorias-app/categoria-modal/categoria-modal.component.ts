import {Component, Input} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-categoria-modal',
  templateUrl: './categoria-modal.component.html',
  styleUrls: ['./categoria-modal.component.scss'],
})
export class CategoriaModalComponent {

  @Input() categoria: { id: number; nombre: string } = {id: 0, nombre: ''};
  @Input() modo!: 'crear' | 'editar';

  constructor(private modalController: ModalController) {
  }

  cerrarModal(): void {
    this.modalController.dismiss();
  }

  guardar(): void {
    if (this.categoria.nombre.trim()) {
      this.modalController.dismiss(this.categoria);
    }
  }

}
