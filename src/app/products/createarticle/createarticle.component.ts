import { Component } from '@angular/core';
import { Produits } from '../produits';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.css']
})
export class CreatearticleComponent {
  produit: Produits = new Produits;
  constructor (private prodserv:ArticlesService){};
  sauvegarder(){
   this.prodserv.postarticle(this.produit).subscribe((data)=>
   console.log("insertion effectuée avec succés")
   )
  }
}
