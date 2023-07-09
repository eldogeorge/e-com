import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}
  
  //Create an object for behaviour subject searchStep3 after complaint searchStep10 data will come to behavSubject
  search= new BehaviorSubject("")//objName= new BehanviorSubject(what type of object is coming from other components)


  //API to get all product
  getAllproduct(){//step5
    return this.http.get('http://localhost:3000/product')
  }

  //API to get single product
  getSproduct(pid:any){// step11
    return this.http.get('http://localhost:3000/product/'+pid)//as params
  }

  //API for add new product
  addProduct(productObject:any){//formstep5
    return this.http.post('http://localhost:3000/product',productObject)//as object
  }

  // API for updated and display in db of product
  updateProduct(pid:any,productObject:any){//editstep5 to access edited data
    return this.http.put('http://localhost:3000/product/'+pid,productObject)//as pid and productObject as params
  }

  //API for delete the product
  deleteProduct(pid:any){
    return this.http.delete('http://localhost:3000/product/'+pid)
  }
}
