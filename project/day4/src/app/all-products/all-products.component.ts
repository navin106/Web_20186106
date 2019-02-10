import { Component, OnInit } from '@angular/core';
import { books } from '../books'
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products = books;
  constructor() { }

  ngOnInit() {
  }

}
