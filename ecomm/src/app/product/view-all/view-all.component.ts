import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {//step6
  productsArray: any = []
  categoryArray: any = []//catstep2
  searchString:any=''//searchstep2
  constructor(private ps: ProductService) {

  }
  ngOnInit(): void {//step6
    this.ps.getAllproduct().subscribe((result: any) => {
      // console.log(result);
      this.productsArray = result
      console.log(this.productsArray);

      this.categoryArray=this.productsArray//catstep4

      //searchStep10
      this.ps.search.subscribe((value:any)=>{
        // console.log(value);
        this.searchString=value
        
      })
    })

  }
  //catstep1
  categoryProduct(catId: any) {
    this.categoryArray = this.productsArray.filter((item: any) =>
      item.categoryId == catId || catId == "")
      console.log(this.categoryArray);
      
  }


}
