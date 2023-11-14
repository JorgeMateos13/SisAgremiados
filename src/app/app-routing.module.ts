import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormatosComponent } from './components/formatos/formatos.component';
import { ConveniosComponent } from './components/convenios/convenios.component';
import { ConvocatoriasComponent } from './components/convocatorias/convocatorias.component';
import { FormAgremiadoComponent } from './components/form-agremiado/form-agremiado.component';
import { VeragremiadoComponent } from './components/veragremiado/veragremiado.component';
import { VersolicitudComponent } from './components/versolicitud/versolicitud.component';
import { EnviaravisoComponent } from './components/enviaraviso/enviaraviso.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path:'components',
    loadChildren: () => import('./components/components.module').then( m => m.ComponentsModule)
  },
  {
    path: 'panel',
    loadChildren: () => import('./pages/paneladmin/paneladmin.module').then( m => m.PaneladminPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'panelad',
    redirectTo: 'panel',
    pathMatch: 'full'
  },
  {
    path:'formatos',
    component: FormatosComponent
  },
  {
    path: 'convenios',
    component: ConveniosComponent
  },
  {
    path: 'convocatorias',
    component: ConvocatoriasComponent
  },
  {
    path:'formAgremiados',
    component: FormAgremiadoComponent
  },
  {
    path:'verAgremiado',
    component: VeragremiadoComponent
  },
  {
    path:'verSolicitud',
    component: VersolicitudComponent
  },
  {
    path:'enviarAviso',
    component: EnviaravisoComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
