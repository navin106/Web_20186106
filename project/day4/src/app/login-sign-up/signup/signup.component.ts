import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  submitted: boolean = false;
  passcheck;
  password;
  cpass;
  first;
  last;
  unamecheck;
  flag: boolean = false;
  flag1: boolean = true;
  flag2: boolean = true;
  flag3: boolean = true;
  flag4: boolean = true;
  flag5: boolean = true;
  
  constructor(private service:BooksService,private router:Router) {}
  // get f() {
  //   return this.registerForm.controls;
    
  // }
  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //   displayName:['',Validators.required],
    //   password:['',Validators.required],
    //   passcheck:['',Validators.required],

    // })
  }
  create;
  onsubmit() {
    // alert("Hal");
    // this.submitted = true;
    this.passcheck = false;
    if(this.cpass === "") {
      this.flag3 = false;
    } else {
      this.flag3 = true;
    }
    if(this.password === "") {
      this.flag2 = false;
    } else {
      this.flag2 = true;
    }
    if(this.unamecheck === "") {
      this.flag1 = false;
    } else {
      this.flag1 = true;
    }
    if(this.password != this.cpass) {
      this.flag = true;
    } else {
      this.flag = false;
    var user={name:this.unamecheck, pass:this.password};
      var userdetails = this.service.adduser(user);
      userdetails.subscribe(x => {
        if(x) {
          // console.log("true");
          this.router.navigate(['']);
        }}); 
  }
}

}
