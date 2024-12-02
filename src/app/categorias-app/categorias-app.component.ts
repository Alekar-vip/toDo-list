import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController} from "@ionic/angular";
import {CategoriaModalComponent} from "./categoria-modal/categoria-modal.component";

@Component({
  selector: 'app-categorias-app',
  templateUrl: './categorias-app.component.html',
  styleUrls: ['./categorias-app.component.scss'],
})
export class CategoriasAppComponent implements OnInit {

  categorias: {
    id: number;
    nombre: string;
  }[] = [];

  constructor(private modalController: ModalController,
              private alertController: AlertController) {
  }

  ngOnInit(): void {
    this.categorias = [
      {id: 1, nombre: 'Trabajo'},
      {id: 2, nombre: 'Hogar'},
      {id: 3, nombre: 'Compras'},
      {id: 4, nombre: 'Otro'},
    ];
  }

  // Abre el modal para agregar una categoría
  async agregarCategoria(): Promise<void> {
    const modal = await this.modalController.create({
      component: CategoriaModalComponent,
      componentProps: {
        modo: 'crear',
        categoria: {id: 0, nombre: ''},
      },
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        const nuevoId =
          this.categorias.length > 0
            ? Math.max(...this.categorias.map((c) => c.id)) + 1
            : 1;
        this.categorias.push({...result.data, id: nuevoId});
      }
    });

    await modal.present();
  }

  // Abre el modal para editar una categoría existente
  async editarCategoria(categoria: { id: number; nombre: string }): Promise<void> {
    const modal = await this.modalController.create({
      component: CategoriaModalComponent,
      componentProps: {
        modo: 'editar',
        categoria: {...categoria},
      },
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        const index = this.categorias.findIndex((c) => c.id === categoria.id);
        if (index !== -1) {
          this.categorias[index] = result.data;
        }
      }
    });

    await modal.present();
  }

  // Método para eliminar una categoría con confirmación
  async eliminarCategoria(categoriaId: number): Promise<void> {
    const alert = await this.alertController.create({
      header: '¿Estás seguro?',
      message: 'Esta acción eliminará la categoría y no se podrá deshacer.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.categorias = this.categorias.filter(
              (categoria) => categoria.id !== categoriaId
            );
          },
        },
      ],
    });

    await alert.present();
  }

}
