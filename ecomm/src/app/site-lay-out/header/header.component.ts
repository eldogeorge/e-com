import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  // searchStep6
  searchTerm:any=""

  // searchStep9
  constructor(private ps:ProductService){}

  ngOnInit(): void {
    
  }

  // searchStep 8
  search(event:any){
    // console.log(event.target.value);
    this.searchTerm=event.target.value

    //to send the data to behavSubject using ps
    // searchStep10
    this.ps.search.next(this.searchTerm)

    
  }

}
