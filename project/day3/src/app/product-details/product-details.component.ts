import { Component, OnInit, Input } from '@angular/core';
import { books } from '../books';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  books;
  books1;
  
  i:any;
  j:number;
  namelist: number[] = [];
  addcart: string[] = [];
  constructor(private route:ActivatedRoute, private data:BooksService) {}

  ngOnInit() {
    this.i = this.route.snapshot.paramMap.get('id');
    console.log(this.i);
    this.books = this.data.getbook(this.i);
    this.books1 = this.books.averageRating;
    // console.log(this.product);
    // console.log(this.product.id);
    for (let j = 0; j < this.books1; j++) {
     this.namelist.push(j);

    }
  }
  
  send() {
    alert("Item added to cart");
    // var obj = {id:this.product.items[this.i].id,quantity:1};
    console.log(this.i);
    this.data.getlist(this.i);
  }
}
