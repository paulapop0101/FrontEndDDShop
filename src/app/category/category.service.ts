import { HttpClient, HttpParams } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    let url = "http://localhost:8080/api/getCategories";
    return this.http.get<Category[]>(url);
  }
  addCategory(name:string): Observable<Object>{
    let url = "http://localhost:8080/api/addCategory?name="+name;
    const params = new HttpParams().set('name', name);
    console.log(url);
    return this.http.post(url,null,{responseType: 'text'});
  }
  deleteCategory(id:number): Observable<any>{
    let url ="http://localhost:8080/api/deleteCategory/" + id;
    return this.http.delete(url);
  }
  addSubcategory(name:string,id:number): Observable<any>{
    let url ="http://localhost:8080/api/addSubcategory/" + id + "?name=" + name;
    return this.http.post(url,null);
  }
  deleteSubcategory(id:number): Observable<any>{
    let url ="http://localhost:8080/api/deleteSubcategory/" + id;
    return this.http.delete(url);
  }
  
}
