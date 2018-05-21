import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { UserLogin } from 'app/shared/model/userLogin';
import { AppService } from 'app/shared/app.service';
import { User } from 'app/shared/model/user';
import { ok } from 'assert';
import { Response } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  login: UserLogin = new UserLogin();
  user: User = new User();
  message: string = '';
  constructor(formBuilder: FormBuilder, private service: AppService, private router: Router,
    private route: ActivatedRoute) {
    this.form = formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  save() {
    var result,
      userLogin = this.form.value;
    result = this.service.login(userLogin);
    result.subscribe(userDTO => (this.onLogin(userDTO)), error => this.onErrorLogin());
  }

  onLogin(user: User) {
    this.user = user;

    this.service.gerarToken({ "email": "application", "password": "46c825f63334a04c8316ee69a8b49a68" }).subscribe(
      (res) => {
        var token = res.headers.get('authorization');
        if (token) {
          window.sessionStorage.setItem('token', token);
          this.service.setUser(user);
          if (user.administrator === 1) {
            this.router.navigate(['admin', 'services']);
          } else {
            this.router.navigate(['cliente']);
          }
        }
        error => {
          console.log("ERRROOOOORRR===>>>" + error);
        }
      }
    );



  }

  onErrorLogin() {
    this.message = "Your email or password is incorrect."
  }

}
