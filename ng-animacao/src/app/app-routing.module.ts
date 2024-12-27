import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { AppRouteReuseStrategy } from './app-route-reuse-strategy'
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { LoadingComponent } from './componentes/loading/loading.component';
import { LoadingNgComponent } from './componentes/loading-ng/loading-ng.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listaTarefas',
    pathMatch: 'full',
    data: {
      reuseComponent: true
    }
  },
  {
    path: 'listaTarefas',
    component: ListaTarefasComponent,
    data: {
      reuseComponent: true
    }
  },
  {
    path: 'loading',
    component: LoadingComponent,
  },
  {
    path: 'loading-ng',
    component: LoadingNgComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: AppRouteReuseStrategy}
  ],
 })
export class AppRoutingModule { }

