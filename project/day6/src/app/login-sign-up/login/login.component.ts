import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:BooksService,private router:Router) { }
  login;   
  unamecheck;
  password;
  create;
  
  ngOnInit() {
  }
  onclick() {
  var user={name:this.unamecheck, pass:this.password};
  this.login = "Login"
  var obj = this.service.validateuser(user);
  console.log(obj);
  // console.log(x);
      obj.subscribe(x => {
        if(x) {
          console.log("true");
          this.login = this.unamecheck.split("@");
          console.log(this.login[0]);
          this.service.putname(this.login[0]);
          this.router.navigate(['/home']);
        }
     }); 
      
  }

}
