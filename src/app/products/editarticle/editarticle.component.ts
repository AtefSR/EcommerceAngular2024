import { Component, OnInit } from '@angular/core';
import { Produits } from '../produits';
import { ArticlesService } from '../articles.service';

import { Scategorie } from 'src/app/categorie/scategorie';
import { ScategorieService } from 'src/app/scategorie/scategorie.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css']
})
export class EditarticleComponent {

  _id?:object;
article: Produits = new Produits()

  constructor(private artserv:ArticlesService,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this._id=this.route.snapshot.params['id'];
    this.artserv.getprodbyid(this._id).subscribe(data=>this.article=data);
  }

  modifarticle(){
    this.artserv.updateproduit(this._id,this.article).subscribe(data=>this.router.navigate(['productstable/']))
    }
}
