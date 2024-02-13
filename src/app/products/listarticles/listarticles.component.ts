import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Produits } from '../produits';


@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent {
  tabproduit: Produits[] = [];
  constructor(private artserv: ArticlesService){}
  ngOnInit(){
    this.artserv.getAllproduits().subscribe((data)=>{
      this.tabproduit=data
    })
  }
}

