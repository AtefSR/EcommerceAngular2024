import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produits} from './produits'; 
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiurl = "http://localhost:3001/api/articles"
  constructor(private http:HttpClient) { }

  getAllproduits():Observable <any> {
    return this.http.get(this.apiurl)
  }
  postarticle(art:Produits){
    return this.http.post(this.apiurl,art)
  }
  updateproduit(id:any , art:Produits){
    return this.http.put(this.apiurl +"/" + id,art)
    }
  deleteproduit(id:any){
    return this.http.delete(this.apiurl + "/" +id)
  }
  getprodbyid(id:any):Observable<any>{
    return this.http.get(this.apiurl +"/" + id)   
  }
}
