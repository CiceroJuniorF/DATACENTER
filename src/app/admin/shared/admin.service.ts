import { Injectable } from '@angular/core';
import { AppService } from 'app/shared/app.service';
import { Http } from '@angular/http';
import { LoadingService } from '../../loading/loading.service';

@Injectable()
export class AdminService {

  constructor(private service: AppService, private http: Http, private loading: LoadingService) { }
  url = 'admin/service';
  urlClient = 'admin/client'
  getServices(name, status) {
    this.loading.showLoading(true);
    if (name === '') {
      name = 'vazio';
    }
    return this.http.get(this.service.getUrl() + this.url + "/services/" + name + "/" + status)
      .map(res => res.json());
  }

  getService(id) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + this.url + "/service/" + id)
      .map(res => res.json());
  }

  getAllDatacenters() {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + "client/datacenters")
      .map(res => res.json());
  }
  getArea() {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + "client/areas")
      .map(res => res.json());
  }
  getLinguas() {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + this.url + "/languages")
      .map(res => res.json());
  }

  getServiceItenType() {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + this.url + "/service-iten-type")
      .map(res => res.json());
  }

  getDataCenters(id) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + this.url + "/data-center/" + id)
      .map(res => res.json());
  }

  getGroups(id) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + this.url + "/group/" + id)
      .map(res => res.json());
  }
  getGroupsSelected(idService) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + this.url + "/group/" + idService)
      .map(res => res.json());
  }

  save(service) {
    this.loading.showLoading(true);
    return this.http.post(this.service.getUrl() + this.url + "/save-service", JSON.stringify(service), this.service.getHeader())
      .map(res => res.json());
  }
  getDatacenters(idService) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + "client/datacenter/" + idService)
      .map(res => res.json());
  }

  getDatacentersSelected(idService) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + this.url + "/data-center/" + idService)
      .map(res => res.json());
  }

  getServicesItemByService(idService) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() +  this.url + "/service-iten/" + idService)
      .map(res => res.json());
  }
  getFieldsByService(idService) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + "client/field/" + idService)
      .map(res => res.json());
  }

  deleteService(idService) {
    this.loading.showLoading(true);
    return this.http.delete(this.service.getUrl() + this.url + "/delete/" + idService)
      .map(res => res.json());
  }

  deleFieldIten(type,idService) {
    this.loading.showLoading(true);
    return this.http.delete(this.service.getUrl() + this.url + "/delete-field-iten/"+type+"/"+ idService)
      .map(res => res.json());
  }

  //Inicio Client
  getClients(name, status) {
    this.loading.showLoading(true);
    if (name === '') {
      name = 'vazio';
    }
    return this.http.get(this.service.getUrl() + this.urlClient + "/clients/" + name + "/" + status)
      .map(res => res.json());
  }
  deleteClient(idClient) {
    this.loading.showLoading(true);
    return this.http.delete(this.service.getUrl() + this.urlClient + "/delete-client/" + idClient)
      .map(res => res.json());
  }

  deleteUserInfo(idService) {
    this.loading.showLoading(true);
    return this.http.delete(this.service.getUrl() + this.urlClient + "/delete-user/" + idService)
      .map(res => res.json());
  }
  getUserType() {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + this.urlClient + "/user-type")
      .map(res => res.json());
  }

  saveClient(client) {
    this.loading.showLoading(true);
    return this.http.post(this.service.getUrl() + this.urlClient + "/save-client", JSON.stringify(client), this.service.getHeader())
      .map(res => res.json());
  }

  getUser(id) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + this.urlClient + "/user/" + id)
      .map(res => res.json());
  }

  getClient(id) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + this.urlClient + "/client/" + id)
      .map(res => res.json());
  }

  getIp(id) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + this.urlClient + "/ip/" + id)
      .map(res => res.json());
  }

  getVlan(id) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + this.urlClient + "/vlan/" + id)
      .map(res => res.json());
  }

  getGroupClient(id) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + this.urlClient + "/group/" + id)
      .map(res => res.json());
  }

  deleteImage(id) {
    return this.http.delete(this.service.getUrl() + "delete-upload/" + id)
      .map(res => res);
  }

  getUrlImage(name){
    return this.service.getUrl()+'files/'+name+'.png'
  }

  getUrlImageDC(name){
    return this.service.getUrl()+'files/'+name+'.jpeg'
  }

  getDataCenter(name) {
    this.loading.showLoading(true);
    if (name === '') {
      name = 'vazio';
    }
    return this.http.get(this.service.getUrl() + "admin/datacenter"+ "/get/" + name)
      .map(res => res.json());
  }

  saveDataCenter(datacenter) {
    this.loading.showLoading(true);
    return this.http.post(this.service.getUrl() + "admin/datacenter" + "/save-datacenter", JSON.stringify(datacenter), this.service.getHeader())
      .map(res => res.json());
  }

  searchClientService(clientName,serviceName,option) {
    this.loading.showLoading(true);
    if (clientName === '') {
      clientName = 'vazio';
    }
    if (serviceName === '') {
      serviceName = 'vazio';
    }
    return this.http.get(this.service.getUrl() + "admin/client-service"+ "/search/" + clientName+"/"+serviceName+"/"+option)
      .map(res => res.json());
  }

  approveClientService(clientid,action) {
    this.loading.showLoading(true);
    return this.http.get(this.service.getUrl() + "admin/client-service"+ "/aprove/" + clientid+"/"+this.service.getUser().userIfoId+"/"+action)
      .map(res => res.json());
  }

}
