import { Component, OnInit } from '@angular/core';
import { Service } from 'app/client/shared/model/service';
import { AdminService } from 'app/admin/shared/admin.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../alert/_services';
import { LoadingService } from '../../../loading/loading.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'

})
export class AdminListComponent implements OnInit {

  listService:Service[] = [];
  name:string = '';
  status:number = 3;
  constructor(private service:AdminService,private router:Router,private alertService: AlertService, private loading:LoadingService) { }

  ngOnInit() {
    this.onSearchServices();
    this.status = 3;
  }

  onSearchServices(){
    this.service.getServices(this.name,this.status).subscribe(data => {this.listService = data;this.loading.showLoading(false);}, error => this.erro());
  }

  isEmpty(){
    if(this.listService.length > 0){
      return false;
    }else{
      return true
    }
  }

  erro(){
    this.loading.showLoading(false);
    this.alertService.error("Ocorreu um erro, por favor tente mais tarde.");
  }

  onStatus(value){
    status = value;
  }
  delete(id){
    this.service.deleteService(id).subscribe(data => { 
      if(data.message !== "Não é possível apagar este serviço, pois esta atribuido a um cliente"){
        this.service.deleteImage(id).subscribe();
        this.alertService.success(data.message);this.ngOnInit();
      }else{
        this.alertService.error(data.message);
      }
      this.loading.showLoading(false);
    });
  }

}
