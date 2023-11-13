import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConveniosComponent } from './convenios/convenios.component';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';
import { FormatosComponent } from './formatos/formatos.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConveniosComponent,
    ConvocatoriasComponent,
    FormatosComponent
  ],
  imports: [    
    CommonModule,
    IonicModule,
  ],
  exports: [
    CommonModule,
    ConveniosComponent,
    ConvocatoriasComponent,
    FormatosComponent
  ]
})
export class ComponentsModule { }
