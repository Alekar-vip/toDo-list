import {Component, Input} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-tareas-modal',
  templateUrl: './tareas-modal.component.html',
  styleUrls: ['./tareas-modal.component.scss'],
})
export class TareasModalComponent {

  @Input() categorias: { id: number; nombre: string }[] = [];

  titulo: string = '';
  categoriaId: number | null = null;

  constructor(private modalController: ModalController) {
  }

  cerrarModal(): void {
    this.modalController.dismiss();
  }

  agregarTarea(): void {
    if (this.titulo && this.categoriaId) {
      this.modalController.dismiss({
        titulo: this.titulo,
        categoriaId: this.categoriaId,
      });
    }
  }
}
