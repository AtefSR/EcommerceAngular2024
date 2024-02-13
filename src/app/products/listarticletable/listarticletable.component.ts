import { Component } from '@angular/core';
import { ArticlesService} from "../articles.service";
import { Produits } from '../produits';

@Component({
  selector: 'app-listarticletable',
  templateUrl: './listarticletable.component.html',
  styleUrls: ['./listarticletable.component.css']
})

export class ListarticletableComponent {
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
  deleteProduct(_id:object){
    this.artserv.deleteproduit(_id).subscribe(res => {this.tabproduit = this.tabproduit.filter(item => item._id !== _id);
    console.log('Post deleted successfully!');
    })
    }
}
