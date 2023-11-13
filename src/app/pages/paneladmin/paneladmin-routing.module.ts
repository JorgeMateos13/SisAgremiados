import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaneladminPage } from './paneladmin.page';

const routes: Routes = [
  {
    path: '',
    component: PaneladminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaneladminPageRoutingModule {}
