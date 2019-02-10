import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.css']
})
export class LoginSignUpComponent implements OnInit {
  public isViewable: boolean;
  constructor() { }

  ngOnInit() { this.isViewable = true; }
  public toggle(): void { this.isViewable = !this.isViewable; }
}
