import { Component } from '@angular/core';
import { BooksService} from './books.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingCart';
  messages:any = this.http.get('http://localhost:4201/');
  username1:any;
  username:any;
  
  constructor(private service:BooksService,private http: HttpClient) {}
  // console.log(messages);
  post() {
    this.http.post('http://localhost:4201/users',{username:"step",password:"stephen"})
    .subscribe(next => console.log(next));
  }
  getname() {
    this.username1 = this.service.getname();
    this.username = this.username1;
  }
}
