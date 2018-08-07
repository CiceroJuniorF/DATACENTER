import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppService } from '../../shared/app.service';
import { format } from 'url';
import { EventEmitter } from '@angular/core';
import { AlertService } from '../../alert/_services';
 
@Injectable()
export class UploadFileService {

  constructor(private service: AppService,private http: Http, private alert:AlertService) {}
 
  nameImage = new EventEmitter<string>();

  public uploadEvent(name: string){
      this.nameImage.emit(name);
  }

  pushFileToStorage(file: File,name) {
    let formdata: FormData = new FormData();
    let extension = file.type.substr(file.type.indexOf('/')+1,file.type.length-1);
    formdata.append('file', file, name+'.'+ extension); 
   
    let token = window.sessionStorage.getItem('token');
    let xhr = new XMLHttpRequest();
    xhr.open("POST",this.service.getUrl()+'upload',);
    xhr.setRequestHeader('Authorization', token);
    xhr.send(formdata);    
    location.reload();    
  }
 
  getFiles(): Observable<string[]> {
    return this.http.get(this.service.getUrl() +'/getallfiles').map(res => res.json());
  }

  getHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    let options = new RequestOptions({ headers: headers });
    return options;
  }
}