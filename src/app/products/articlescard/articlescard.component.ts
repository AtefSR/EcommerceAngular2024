import { Component } from '@angular/core';
import { Produits } from '../produits';
import { ArticlesService } from '../articles.service';


@Component({
  selector: 'app-articlescard',
  templateUrl: './articlescard.component.html',
  styleUrls: ['./articlescard.component.css']
})
export class ArticlescardComponent {
  constructor(private artserv:ArticlesService){}
  articles:any;
  tabproduit: Produits[] = [];
  ngOnInit():void{
  this.listarticles()
  }
  listarticles(){
    this.artserv.getAllproduits().subscribe(
    (data:any)=>{
    this.tabproduit=data
    }
    )
    }
}
