import { Component, OnInit } from '@angular/core';
import { books } from '../books';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  products=books.items;
  ngOnInit() {
    
  }
  title = "Home";

}
