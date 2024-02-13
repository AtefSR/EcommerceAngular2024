import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcategorieComponent } from './listcategorie/listcategorie.component';
import { ScategorieComponent } from './scategorie/scategorie.component';
import { CreatecategorieComponent } from './createcategorie/createcategorie.component';


const routes: Routes = [
  {path:"categorie/listcat", component:ListcategorieComponent},
  {path:"scategorie/listscat", component:ScategorieComponent},
  {path:"categorie/create", component: CreatecategorieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
