import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subcategory } from '../Models/subcategory';
import { Baseproducts } from '../Models/products/baseproducts';
import { VariantModel } from '../Models/products/variantModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get("http://localhost:8080/api/getProducts");
  }
  getProductsBySubcategory(id:number):Observable<any>{
    return this.http.get("http://localhost:8080/api/getProductsBySubcategory/"+id);
  }
  addProduct( product :Partial<{ name: string | null; description: string | null; subcategoryId: number | null; }>): Observable<Object>{
    return this.http.post("http://localhost:8080/api/addProduct",product);
  }
  deleteProduct(id : number){
    return this.http.delete("http://localhost:8080/api/deleteProduct/"+id);
  }
  deleteProducts(ids : number[]){
    return this.http.put("http://localhost:8080/api/deleteProducts",ids);
  }
  updateProduct(product : Partial<{ id: number;name: string | null; description: string | null; subcategory: Subcategory | null; }>){
    return this.http.put("http://localhost:8080/api/updateProduct",product);
  }


  getAssignedValues(id : number):Observable<any>{
    return this.http.get("http://localhost:8080/api/getAssignedValues/"+id);
  }

  addVariant(variant : VariantModel): Observable<any>{
    return this.http.post("http://localhost:8080/api/addVariant",variant);
  }

  getVariant(id : number): Observable<any>{
    return this.http.get("http://localhost:8080/api/getVariant/"+id);
  }

  getVariants():Observable<any>{
    return this.http.get("http://localhost:8080/api/getAllVariants");
  }
  getVariantsBySubcategory(id:number):Observable<any>{
    return this.http.get("http://localhost:8080/api/getVariantsBySubcategory/"+id);
  }
  deleteVariant(id : number):Observable<any>{
    return this.http.delete("http://localhost:8080/api/deleteVariant/"+id);
  }
  deleteVariants(ids : number[]){
    return this.http.put("http://localhost:8080/api/deleteVariants",ids);
  }
  updateVariant(variant: VariantModel, id:number):Observable<any>{
    return this.http.put<any>("http://localhost:8080/api/updateVariant/"+id,variant);
  }
  getColors(productid:number):Observable<any>{
    return this.http.get("http://localhost:8080/api/getColorsByProductId/"+productid);
  }
  getSizes(productId:number,color:string): Observable<any>{
    return this.http.get("http://localhost:8080/api/getSizesByColor/"+productId+"?color="+color);
  }

}
