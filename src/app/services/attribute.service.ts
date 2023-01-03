import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subcategory } from '../Models/subcategory';
import { Attribute } from '../Models/attribute';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  constructor(public http : HttpClient) {

  }
  getAttributes() : Observable<Attribute[]> {
    return this.http.get<Attribute[]>("http://localhost:8080/api/getAttributes");
  }

  deleteAttribute(id : number) : Observable<any>{
    let url = "http://localhost:8080/api/deleteAttribute/" + id;
    return this.http.delete(url);

  }
  deleteAttributeValue(id : number) : Observable<any>{
    let url = "http://localhost:8080/api/deleteAttributeValue/" + id;
    return this.http.delete(url);

  }
  addAttributeValue(id:number,value:string): Observable<any>{
    let url = "http://localhost:8080/api/addAttributeValue/" + id + "?value="+value;
    return this.http.post(url,null,{responseType:'text'});
  }
  addAttribute(name:string): Observable<any>{
    let url = "http://localhost:8080/api/addAttribute?name="+name;
    return this.http.post(url,null,{responseType:'text'});
  }


  addSubcategory(id : number, subcategory : Subcategory) : Observable<any>{
    let url  = "http://localhost:8080/api/addSubcategoryToAttributee/" + id;
    return this.http.post(url,subcategory);
  }

  deleteSubcategory(id : number, subcategory: Subcategory) : Observable<any>{
    let url = "http://localhost:8080/api/deleteSubcategoryFromAttribute/" + id;
    return this.http.put(url,subcategory);

  }
}
