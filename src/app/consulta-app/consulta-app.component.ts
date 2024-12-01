import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-app',
  templateUrl: './consulta-app.component.html',
  styleUrls: ['./consulta-app.component.scss'],
})
export class ConsultaAppComponent {
  categorias = [
    { id: 1, nombre: 'Trabajo' },
    { id: 2, nombre: 'Hogar' },
    { id: 3, nombre: 'Compras' },
    { id: 4, nombre: 'Otro' },
  ];

  tareas = [
    { id: 1, nombre: 'Preparar reporte', descripcion: 'Enviar reporte mensual', categoriaId: 1 },
    { id: 2, nombre: 'Limpiar cocina', descripcion: 'Lavar platos y barrer', categoriaId: 2 },
    { id: 3, nombre: 'Comprar frutas', descripcion: 'Manzanas y bananas', categoriaId: 3 },
    { id: 4, nombre: 'Leer libro', descripcion: 'Terminar capítulo 3', categoriaId: 4 },
  ];

  categoriaSeleccionada: number | null = null;
  tareasFiltradas = [...this.tareas];

  constructor() {}


  filtrarTareas(): void {
    this.tareasFiltradas = this.categoriaSeleccionada
      ? this.tareas.filter(t => t.categoriaId === this.categoriaSeleccionada)
      : [...this.tareas];
  }
}
