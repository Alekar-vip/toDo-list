import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController} from "@ionic/angular";
import {TareasModalComponent} from "./tareas-modal/tareas-modal.component";

@Component({
  selector: 'app-tareas-app',
  templateUrl: './tareas-app.component.html',
  styleUrls: ['./tareas-app.component.scss'],
})
export class TareasAppComponent {
  tareas: {
    id: number;
    titulo: string;
    completada: boolean;
    categoriaId: number;
  }[] = [];

  categorias: {
    id: number;
    nombre: string;
  }[] = [
    {id: 1, nombre: 'Trabajo'},
    {id: 2, nombre: 'Hogar'},
    {id: 3, nombre: 'Compras'},
    {id: 4, nombre: 'Otro'},
  ];

  constructor(private modalController: ModalController,
              private alertController: AlertController) {
  }

  async abrirModalAgregarTarea(): Promise<void> {
    const modal = await this.modalController.create({
      component: TareasModalComponent,
      componentProps: {
        categorias: this.categorias,
      },
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.tareas.push({
          id: this.tareas.length + 1,
          titulo: result.data.titulo,
          completada: false,
          categoriaId: result.data.categoriaId,
        });
      }
    });

    await modal.present();
  }


  toggleCompletada(tareaId: number): void {
    const tarea = this.tareas.find((t) => t.id === tareaId);
    if (tarea) {
      tarea.completada = !tarea.completada;
    }
  }

  getCategoriaNombre(categoriaId: number): string {
    return this.categorias.find((cat) => cat.id === categoriaId)?.nombre || '';
  }

  async eliminarTarea(tareaId: number): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar esta tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          },
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.tareas = this.tareas.filter(tarea => tarea.id !== tareaId);
          },
        },
      ],
    });

    await alert.present();
  }



}
