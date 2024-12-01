import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-app',
  templateUrl: './consulta-app.component.html',
  styleUrls: ['./consulta-app.component.scss'],
})
export class ConsultaAppComponent implements OnInit {
  categorias: { id: number; nombre: string }[] = [];
  tareas: { nombre: string; descripcion: string; categoriaId: number }[] = [];
  tareasFiltradas: { nombre: string; descripcion: string; categoriaId: number }[] = [];
  categoriaSeleccionada: number | null = null;  // Se permite un valor null para mostrar todas

  ngOnInit() {
    this.categorias = [
      { id: 1, nombre: 'Trabajo' },
      { id: 2, nombre: 'Hogar' },
      { id: 3, nombre: 'Compras' },
      { id: 4, nombre: 'Otro' },
    ];

    this.tareas = [
      { nombre: 'Tarea 1', descripcion: 'Descripción tarea 1', categoriaId: 1 },
      { nombre: 'Tarea 2', descripcion: 'Descripción tarea 2', categoriaId: 2 },
      { nombre: 'Tarea 3', descripcion: 'Descripción tarea 3', categoriaId: 3 },
      { nombre: 'Tarea 4', descripcion: 'Descripción tarea 4', categoriaId: 4 },
      { nombre: 'Tarea 5', descripcion: 'Descripción tarea 5', categoriaId: 1 },
    ];

    this.tareasFiltradas = this.tareas; // Al inicio, mostramos todas las tareas
  }

  filtrarTareas() {
    if (this.categoriaSeleccionada === null) {
      this.tareasFiltradas = this.tareas; // Mostrar todas las tareas
    } else {
      this.tareasFiltradas = this.tareas.filter(tarea => tarea.categoriaId === this.categoriaSeleccionada);
    }
  }
}
