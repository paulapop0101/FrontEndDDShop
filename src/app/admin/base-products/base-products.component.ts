import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { Baseproducts } from '../../Models/products/baseproducts';
import { ProductService } from '../../services/product.service';
import { AdminProducts } from '../../Models/products/admin-products';
import { Subcategory } from '../../Models/subcategory';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../Models/category';
import { ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import { EditproductdialogComponent } from './editproductdialog/editproductdialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-base-products',
  templateUrl: './base-products.component.html',
  styleUrls: ['./base-products.component.css']
})


export class BaseProductsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ELEMENT_DATA: any[]=[];
  dataSource! : MatTableDataSource<AdminProducts>;
  subcategory : Category[] = [];
  sub : Subcategory = new Subcategory();
  cat: string="";
  f : number = 0;
  error_message : string = "";
  product : Baseproducts = new Baseproducts();
  selection = new SelectionModel<AdminProducts>(true, []);
  createProduct : boolean = false;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    let numSelected = this.selection.selected.length;
    let numRows;
    this.dataSource ? numRows = this.dataSource.data.length : numRows = 0;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource?.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(index? : number,row?: AdminProducts): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${index}`;
  }
  constructor(public router: Router, public productService: ProductService, public categoryService: CategoryService, public dialog: MatDialog) {
    categoryService.getCategories().subscribe(
      data=>{
        this.subcategory=data;
      }
    )
  }
  displayedColumns: string[] = ['select','position', 'name', 'description', 'subcategory','edit'];
  ngOnInit() {
    this.productService.getProducts().subscribe(
      data=>{
        for (let index = 0; index < data.length; index++) {
          this.ELEMENT_DATA.push(
            {
              id: data[index].id,
              name: data[index].name ,
              description: data[index].description,
              subcategory :data[index].subcategory

            });

        }

       this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
      },
      error=>console.log(error)

    )
  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  page4: boolean = true;
  logOut(){
    localStorage.removeItem('user');
   this.router.navigate(['']);
 }
 onSubmit(){
  this.error_message="";
    console.log(this.product);

    this.productService.addProduct(this.product).subscribe(
      data=>{console.log(data);

        window.location.reload();
      },
      error=>{
        console.log(error.error);
        this.error_message=error.error;
      }
    )

 }
 deleteProduct(product_id : number,element_index:number){
    console.log(product_id);
    this.productService.deleteProduct(product_id).subscribe(
      data=>console.log(data),
      error=>console.log(error.error)
    )
    this.ELEMENT_DATA.splice(element_index,1);
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
 }
 deleteProducts(){
    if(this.selection.selected.length>0){
        let list : number[] = [];
        this.selection.selected.forEach(element => {
          list.push(element.id)
        });
        this.productService.deleteProducts(list).subscribe(
          data=>console.log(data)
        )
        window.location.reload();
    }
  }

  createButton(){
    this.createProduct = !this.createProduct;
  }

  openDialog(index : Baseproducts) {

    const dialogRef =this.dialog.open(EditproductdialogComponent, {
      minWidth: '200px',
      width:'500px',
      data: index
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}
