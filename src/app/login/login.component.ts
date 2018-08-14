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
import { LoadingService } from '../loading/loading.service';
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
    private route: ActivatedRoute, private loading : LoadingService) {
    this.form = formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  save() {
    this.onLogin();
  }
    

  onLogin() {    
    this.service.gerarToken({ "email": this.login.email, "password": this.login.password}).subscribe(
      (res) => {
        this.loading.showLoading(false);
        var token = res.headers.get('authorization');
        if (token) {
          window.sessionStorage.setItem('token', token);
          this.service.login(this.form.value).subscribe(user =>{
            this.service.setUser(user);
            if (user.administrator === 1) {
              this.router.navigate(['admin']);
            } else {
              this.router.navigate(['cliente']);
            }
          }, error =>{this.loading.showLoading(false);} );

        }
        
      },(err)=>{
        this.onErrorLogin();
        this.loading.showLoading(false);
      }
    );
    

  }

  onErrorLogin() {
    this.message = "Your email or password is incorrect."
  }

}
