import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { EditcategorieComponent } from './editcategorie/editcategorie.component';
import { ScategorieComponent } from './scategorie/scategorie.component';
import { ListcategorieComponent } from './listcategorie/listcategorie.component';
import { EditscategorieComponent } from './editscategorie/editscategorie.component';
import { AjouttscategorieComponent } from './ajoutcategorie/ajouttscategorie.component';
import { ListscategorieComponent } from './listscategorie/listscategorie.component';
import { CreatecategorieComponent } from './createcategorie/createcategorie.component';


@NgModule({
  declarations: [
    EditcategorieComponent,
    ScategorieComponent,
    ListcategorieComponent,
    EditscategorieComponent,
    AjouttscategorieComponent,
    ListscategorieComponent,
    CreatecategorieComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule
  ]
})
export class CategorieModule { }
