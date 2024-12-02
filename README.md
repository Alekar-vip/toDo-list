# Proyecto de Gestión de Tareas con Ionic

Este proyecto es una aplicación de gestión de tareas desarrollada con **Ionic** y **Angular**, diseñada para organizar tareas en categorías, marcarlas como completadas y mostrar las pendientes. Incluye una interfaz amigable y funcional con soporte para modales y formularios.

---

### **Características**
1. **Gestión de tareas**:
   - Agregar nuevas tareas con un título y asignarlas a una categoría existente.
   - Marcar tareas como completadas utilizando checkboxes.
   - Mostrar un mensaje de "No tengo tareas pendientes" si no hay tareas registradas.

2. **Categorías predefinidas**:
   - El proyecto incluye categorías iniciales como Trabajo, Hogar, Compras y Otro.

3. **Interfaz con modales**:
   - Utiliza modales para agregar nuevas tareas con un formulario interactivo.

4. **Uso de componentes reutilizables**:
   - Separación en componentes como `TareasAppComponent` y `TareasModalComponent`.

5. **Buenas prácticas**:
   - Código estructurado con métodos reutilizables.
   - Manejo de errores para evitar problemas con datos no inicializados.

---


---

### **Instalación**

#### **Requisitos previos**
- Node.js >= 16.x
- Ionic CLI >= 7.x
- Angular >= 15.x

#### **Pasos**
1. Clona este repositorio:
   ```bash
   git clone https://github.com/Alekar-vip/toDo-list.git
   cd toDo-list
2. npm install
3. ionic serve
4. Abre la aplicación en tu navegador en http://localhost:8100/tabs/tareas



### **Generar Apk**


#### **Requisitos previos**

Instalación de Cordova

- npm install -g cordova
- ionic cordova platform add android

#### **Construir la aplicación**

- npm install -g cordova
- ionic cordova build android --release




