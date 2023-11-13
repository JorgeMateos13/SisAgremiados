import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaneladminPageRoutingModule } from './paneladmin-routing.module';

import { PaneladminPage } from './paneladmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaneladminPageRoutingModule
  ],
  declarations: [PaneladminPage]
})
export class PaneladminPageModule {}
