import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { FormatosComponent } from '../components/formatos/formatos.component';
import { PaneladminPage } from '../pages/paneladmin/paneladmin.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'panelad',
    component:PaneladminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
