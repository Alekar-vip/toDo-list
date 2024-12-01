import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private categorias = new BehaviorSubject<{ id: number; nombre: string }[]>([
    { id: 1, nombre: 'Trabajo' },
    { id: 2, nombre: 'Hogar' },
    { id: 3, nombre: 'Compras' },
    { id: 4, nombre: 'Otro' },
  ]);

  categorias$ = this.categorias.asObservable();


  constructor() { }

  obtenerCategorias() {
    return this.categorias.getValue();
  }
}
