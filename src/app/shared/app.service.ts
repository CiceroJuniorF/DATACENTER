import { Injectable } from '@angular/core';
import { User } from 'app/shared/model/user';
import { Http, Headers, RequestOptions } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Response } from '_debugger';

@Injectable()
export class AppService {

   //URL DEV LOCAL
   private url: string = "http://173.193.174.50:8080/"
   constructor(private http: Http) { }
 
   getHeader() {
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     let options = new RequestOptions({ headers: headers });
     return options;
   }


   login(userLogin){  
      return this.http.post(this.url + "client/login", JSON.stringify(userLogin), this.getHeader())
        .map(res => res.json());          
   }
  
   gerarToken(appKey){  
    let header = new Headers();
    return this.http.post(this.url + "token/login", JSON.stringify(appKey)).map(res => res);
    
  }
    

  setUser(user:User){
    window.sessionStorage.setItem("user",JSON.stringify(user));
  }

  getUser(){
    
    return JSON.parse(window.sessionStorage.getItem("user"));

  }

  removeUser(){
    window.sessionStorage.removeItem("user");
    window.sessionStorage.removeItem("token");
  }

  getUrl(){
    return this.url;
  }

}
