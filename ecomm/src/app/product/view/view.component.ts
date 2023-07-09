import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  pid:any
  productS:any={}

  constructor(private ar:ActivatedRoute, private ps:ProductService, private router:Router ){}

  ngOnInit(): void{//step12
    this.ar.params.subscribe((data:any)=>{
      // console.log(data.id);
      this.pid=data.id
      // console.log(this.pid);
      
    })

    //api call
    this.ps.getSproduct(this.pid).subscribe((result:any)=>{
      // console.log(result);
      this.productS=result
      console.log(this.productS);
      
      
    })  
  }
  //delete api request to button
  deleteProduct(){
    this.ps.deleteProduct(this.pid).subscribe((reult:any)=>{
    alert("Product has be deleted")
    this.router.navigateByUrl("")
  })
}
}
