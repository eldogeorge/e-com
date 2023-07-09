import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{//editstep2 down
  id:any
  pdata:any={}
  constructor(private ps:ProductService, private ar:ActivatedRoute,private router:Router ){}//ar to access params

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      // console.log(data);
      this.id=data.id
      console.log(this.id);   
    })
    this.ps.getSproduct(this.id).subscribe((result:any)=>{
      // console.log(result);
      this.pdata=result
      console.log(this.pdata);    
    })
  }
  editProduct(){
    this.ps.updateProduct(this.id,this.pdata).subscribe((result:any)=>{
      alert('Product has updated')
      this.router.navigateByUrl('product/view/:pdata')
    })
  }
}
