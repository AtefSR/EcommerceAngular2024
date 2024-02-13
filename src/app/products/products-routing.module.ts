import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarticlesComponent } from './listarticles/listarticles.component';
import { ListarticletableComponent } from './listarticletable/listarticletable.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { ArticlescardComponent } from './articlescard/articlescard.component';

const routes: Routes = [
  { path: 'products',component:ListarticlesComponent},
  { path: 'productstable',component:ListarticletableComponent},
  { path: 'productstable/createart',component:CreatearticleComponent},
  { path :'productstable/editart/:id', component:EditarticleComponent},
  { path :'productstable/card', component:ArticlescardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
