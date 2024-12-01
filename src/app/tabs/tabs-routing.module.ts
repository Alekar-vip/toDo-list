import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tareas',
        loadChildren: () => import('../tareas-app/tareas.module').then(m => m.TareasModule)
      },
      {
        path: 'categoria',
        loadChildren: () => import('../categorias-app/categorias.module').then(m => m.CategoriasModule)
      },
      {
        path: 'consulta',
        loadChildren: () => import('../consulta-app/consulta.module').then(m => m.ConsultaModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tareas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tareas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
