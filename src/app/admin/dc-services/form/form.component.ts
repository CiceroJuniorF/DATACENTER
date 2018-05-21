import { Component, OnInit } from '@angular/core';
import { Area } from 'app/client/shared/model/area';
import { AdminService } from 'app/admin/shared/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceModel } from 'app/admin/shared/models/serviceModel';
import { Language } from 'app/shared/model/language';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertService } from '../../../alert/_services';
import { LoadingService } from '../../../loading/loading.service';
import { UploadFileService } from '../../upload/upload-file.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class AdminFormComponent implements OnInit {
  listArea: Area[] = [];
  linguas: Language[] = [];
  serviceModel: ServiceModel = new ServiceModel();
  isFields = true;
  isDataCenter = false;
  isServiceIten = false;
  isGroup = false;
  title: string = '';
  formName: FormGroup;
  inscricao: Subscription;
  id:number;
  urlImage:string;

  constructor(private service: AdminService, private router: Router,
    private route: ActivatedRoute, private upload:UploadFileService,private loading:LoadingService, formBuilder: FormBuilder, private alert:AlertService) {
    this.formName = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]]
    });
  }

  ngOnInit() {
    //Resgatar Parametros
    this.inscricao = this.route.params.subscribe(
    (params: any) => {        
      this.id = params['idService'];
      if(params['idService'] != undefined)
      this.getService(params['idService']);
    });
    this.title = 'Adicionar Service';
    this.serviceModel.id = null;
    this.serviceModel.language = 1;
    this.serviceModel.area = 1;
    this.serviceModel.status = 2;
    this.serviceModel.chargingType = 1;
    this.service.getArea().subscribe(data => {this.listArea = data; this.loading.showLoading(false);}, error => {
      this.loading.showLoading(false); this.alert.error("Ocorreu um erro, por favor tente mais tarde.");
    });
      
    this.service.getLinguas().subscribe(data => {this.linguas = data; this.loading.showLoading(false);}, error => {
      this.loading.showLoading(false); this.alert.error("Ocorreu um erro, por favor tente mais tarde.");
    });
  }
  getService(id){
    this.service.getService(id).subscribe(data => {this.serviceModel = data;
       this.loading.showLoading(false);
       this.urlImage = this.service.getUrlImage(this.serviceModel.id);
      }, error => {
      this.loading.showLoading(false); this.alert.error("Ocorreu um erro, por favor tente mais tarde.");
    });
  }
  openTab(tab) {
    if (tab === 'field') {
      this.isFields = true;
      this.isDataCenter = false;
      this.isServiceIten = false;
      this.isGroup = false;
    }
    if (tab === 'dc') {
      this.isFields = false;
      this.isDataCenter = true;
      this.isServiceIten = false;
      this.isGroup = false;
    }
    if (tab === 'si') {
      this.isFields = false;
      this.isDataCenter = false;
      this.isServiceIten = true;
      this.isGroup = false;
    }
    if (tab === 'group') {
      this.isFields = false;
      this.isDataCenter = false;
      this.isServiceIten = false;
      this.isGroup = true;
    }
  }

  serviceList(event) {
    this.serviceModel.serviceIten = "";
    event.forEach(element => {
      this.serviceModel.serviceIten +=
        "{" +
        element.id+ ';' +
        element.name + ';' +
        element.description + ';' +
        element.status + ';' +
        null+ ';' +
        element.labelForDescription + ';' +
        element.type + ';' +
        element.price +
        "}";
    });
    if( this.serviceModel.serviceIten == ""){
      this.serviceModel.serviceIten =null;
    }
  }

  fieldList(event) {
 
    this.serviceModel.field = "";
    event.forEach(element => {
      this.serviceModel.field +=
        "{" +        
        element.id + ';' +
        element.name + ';' +
        element.dataType+ ';'+ 
        element.required +';'+
        element.fieldType+ ';'+ 
        element.fieldDescription + ';'+
        element.fieldValues + ';'+ 
        element.fieldValueDefault + ';'+
        element.isUsedForPrice + ';'+
        element.hint + ';'+ 
        element.price +     
        "}";
    });
    if( this.serviceModel.field == ""){
      this.serviceModel.field =null;
    }

  }

  dataCenterList(event){
    this.serviceModel.dataCenters ='';
    event.forEach(element => {
      this.serviceModel.dataCenters += element.id +';'
    });
    this.serviceModel.dataCenters = this.serviceModel.dataCenters.substr(0,(this.serviceModel.dataCenters.length - 1));
    if( this.serviceModel.dataCenters == ""){
      this.serviceModel.dataCenters =null;
    }
  }
  groupList(event){
    this.serviceModel.group ='';
    event.forEach(element => {
      this.serviceModel.group += element.id +';'
    });
    this.serviceModel.group = this.serviceModel.group.substr(0,(this.serviceModel.group.length - 1));
    if( this.serviceModel.group == ""){
      this.serviceModel.group =null;
    }
  }

  save() {
    this.service.save(this.serviceModel).subscribe(
      data =>{
        this.upload.uploadEvent(data); 
        this.router.navigate(['/admin/services']); 
        this.loading.showLoading(false);
        this.alert.success("Salvo com Sucesso!");
      },
      error => {this.loading.showLoading(false);this.alert.error("Ocorreu um erro! Por favor verifique se todos os campos obrigatórios estão preenchidos.\n")}
    );
  }

  

}
