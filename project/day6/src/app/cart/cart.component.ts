import { Component, OnInit } from '@angular/core';
import {BooksService } from '../books.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  arr: any[]=[];
  i = 0;
  j = 1;
  total=0;
  total1=0;
  shipping=0;
  pr;
  array;
  name;
  pr1:boolean = false;
  constructor(private data:BooksService,private router:Router) { 
  this.arr = this.data.get();
  this.name = this.data.getname1();  
  console.log(this.arr);
  console.log(this.name);
  
  }
  delete(id) {
    this.data.delete(id);
  }
  
  ngOnInit() {
   
    for(this.i = 0;this.i < this.arr.length;this.i++) {
      this.total += (this.arr[this.i].saleInfo.listPrice.amount * this.arr[this.i].quantity);
    }
    if(this.arr.length === 0) {
      this.pr = true;
      this.total = 0;
    }
    console.log(this.total);
  }
  gettotal() {
    this.total = 0;
    for(this.i = 0;this.i < this.arr.length;this.i++) {
      this.total += (this.arr[this.i].saleInfo.listPrice.amount * this.arr[this.i].quantity);
    }
     console.log(this.arr);
    return this.total;
  }
  onsubmit() {
    var user={name:this.name,total:this.total, array:this.arr};
    var array1 = user;
    var obj = this.data.putdetails(array1);
        obj.subscribe(x => {
          if(x) {
            console.log("true");
          }
        }); 
        this.router.navigate(['/payment']);
    }
   
  continue(){
    this.router.navigate(['/home']);
  }

}
