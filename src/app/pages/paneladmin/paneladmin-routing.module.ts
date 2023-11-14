import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaneladminPage } from './paneladmin.page';
import { FormAgremiadoComponent } from 'src/app/components/form-agremiado/form-agremiado.component';

const routes: Routes = [
  {
    path: '',
    component: PaneladminPage
  },
  {
    path: 'formAgremiados',
    component: FormAgremiadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaneladminPageRoutingModule {}
