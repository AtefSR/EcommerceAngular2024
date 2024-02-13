import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Categorie1 } from './categorie1';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiURL="http://localhost:3001/api/categories";
  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.apiURL);
  }

  addcategorie(cat:Categorie1){
    return this.http.post(this.apiURL,cat)
    }
  
    updatecategorie(id:any,cat:Categorie1){
      return this.http.put(this.apiURL+"/"+id,cat)
    }
     deletecategorie(id:any){
      return this.http.delete(this.apiURL+"/"+id)
     }
     getcatbyid(id:any){
      return this.http.get(this.apiURL+"/"+id)
     }

}