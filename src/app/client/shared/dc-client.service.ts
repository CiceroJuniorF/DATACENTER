import { Injectable } from '@angular/core';
import { AppService } from 'app/shared/app.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { LoadingService } from '../../loading/loading.service';

@Injectable()
export class DcClientService {
  appService: AppService;
  constructor(private http: Http, private service: AppService, private loading:LoadingService) {
    this.appService = service;
  }

  getProducts(idClient) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + "client/myProducts/" + idClient)
      .map(res => res.json());
  }
  getArea() {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + "client/areas")
      .map(res => res.json());
  }

  placeOrder(summary) {
    this.loading.showLoading(true);
    return this.http.post(this.service.getUrl() + "client/placeOrder", JSON.stringify(summary), this.service.getHeader())
      .map(res => res.json());
  }

  getClientService(idArea,idClient) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + "client/client-service/"+idArea+"/"+idClient)
      .map(res => res.json());
  }

  getProductService(idClientService) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + "client/client-service/"+idClientService)
      .map(res => res.json());
  }


  getServicesByArea(idArea) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + "client/services/" + idArea)
      .map(res => res.json());
  }

  getFieldsByService(idService) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + "client/field/" + idService)
      .map(res => res.json());
  }

  getServicesItemByService(idService) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + "client/subservice/" + idService)
      .map(res => res.json());
  }

  getAppService() {
    return this.appService;
  }

  getDatacenters(idService){
    this.loading.showLoading(true);   
    return this.http.get(this.service.getUrl() + "client/datacenter/"+idService)
      .map(res => res.json());         
 }

 getAllDatacenters(){
  this.loading.showLoading(true);   
  return this.http.get(this.service.getUrl() + "client/datacenters")
    .map(res => res.json());         
}

getDatacenter(idDataCenter){
  this.loading.showLoading(true);   
  return this.http.get(this.service.getUrl() + "client/datacenters/"+idDataCenter)
    .map(res => res.json());         
}
getUrlImage(name){
  return this.service.getUrl()+'files/'+name+'.png'
}

}
