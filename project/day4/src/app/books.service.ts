import { Injectable } from '@angular/core';
import { books } from "./books";
import { HttpClient } from "@angular/common/http";
// import { Hero } from './datatype';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  list: any[] = [];
  i = 0;
  flag = 0;
  name:any;
  
  item1 : any;
  id : any;
  constructor(private http:HttpClient) {
    this.name = "Login/SignUp";
   }
   get() {
    return this.list;
  }
   getbook(i) {
    return books.items[i];
   }
   getlist(seqno:any) {
     this.id = books.items[seqno].id;
    //  var tempseq = seqno;
     for(this.i = 0;this.i < this.list.length;this.i++) {
       if(this.list[this.i].id == this.id) {
        this.list[this.i].quantity = this.list[this.i].quantity + 1;
        console.log(this.list[this.i].quantity);
        // this.list.push(books.items[obj.id]);
        this.flag = 1;
       }
      //  } else {
      //   console.log(this.list[this.i].quantity);
      //  }
     }
    
     if (this.flag == 0) {
        this.item1 = books.items[seqno];
        this.item1.quantity = 1;
        this.list.push(this.item1);
        
     }
    //  this.list.push(books.items[obj.id]);
    
    // console.log(this.list[0].this.id);
    this.flag = 0;
   }
   delete(index) {
    this.list.splice(index, 1);
  }
  adduser(user) {
    console.log("alerts");
    return this.http.post('http://127.0.0.1:4201/login-sign-up/signup',user);
  }
  validateuser(user) {
    return this.http.post('http://127.0.0.1:4201/login-sign-up/login',user);
  }
  putname(name) {
    this.name = name;
  }
  putdetails(details) {
    return this.http.post('http://127.0.0.1:4201/cart',details);
  }
  getname() {
    
    return this.name;
  }
  getname1() {
    
    return this.name;
  }
}
