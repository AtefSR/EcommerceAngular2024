import { Component } from '@angular/core';
import { Categorie1 } from '../categorie1';
import { CategoriesService } from '../categorie.service';

@Component({
  selector: 'app-listcategorie',
  templateUrl: './listcategorie.component.html',
  styleUrls: ['./listcategorie.component.css']
})
export class ListcategorieComponent {
  listCategories: Categorie1[];
  constructor(private catServ:CategoriesService){}

  ngOnInit() {
    

    this.catServ.getAll().subscribe((data: Categorie1[]) => {
      this.listCategories = data;
    })

  }
}
