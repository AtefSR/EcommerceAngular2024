import { Component } from '@angular/core';
import { Categorie1 } from '../categorie1';
import { CategoriesService } from '../categorie.service';

@Component({
  selector: 'app-createcategorie',
  templateUrl: './createcategorie.component.html',²
  styleUrls: ['./createcategorie.component.css']
})
export class CreatecategorieComponent {
  categorie: Categorie1 = new Categorie1();


  constructor(private categorieSev:CategoriesService){}



  ajouterCategorie() {
    this.categorieSev.createCategorie(this.categorie).subscribe((data) => {
      alert(`ajouter categorie ${this.categorie.nomcategorie} avec succee`)
    })
  }
}
