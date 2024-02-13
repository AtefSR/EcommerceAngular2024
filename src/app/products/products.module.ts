import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ListarticlesComponent } from './listarticles/listarticles.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { ListarticletableComponent } from './listarticletable/listarticletable.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { ArticlescardComponent } from './articlescard/articlescard.component';



@NgModule({
  declarations: [
    ListarticlesComponent,
    EditarticleComponent,
    CreatearticleComponent,
    ListarticletableComponent,
    ArticlescardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DataTablesModule,
    FormsModule
  ]
})
export class ProductsModule { }
