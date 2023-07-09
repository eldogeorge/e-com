import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
                //formstep2           //formstep8               //formstep10
  constructor(private fb:FormBuilder,private ps:ProductService,private router:Router){} 

  ngOnInit(): void {
  }
  addForm=this.fb.group({//formstep3
    pid:[''],
    pname:[''],
    pcatid:[''],
    pdes:[''],
    pprice:[''],
    pav:[''],
    pimg:[''],
    prating:[''],
    preview:[''],
    pvar:[''],
    pwar:['']

  })

  add(){//formstep7 down
    var path=this.addForm.value
    var prodData={
      id: path.pid,
      productName: path.pname,
      categoryId: path.pcatid,
      description: path.pdes,
      price: path.pprice,
      is_avaible: path.pav,
      productImg: path.pimg,
      rating: path.prating,
      review: path.preview,
      vendor_name: path.pvar,
      warranty: path.pwar
    }
    this.ps.addProduct(prodData).subscribe((result:any)=>{//formstep9
      alert("Product Added")
      this.router.navigateByUrl("")//formstep11
    })

  }
}
