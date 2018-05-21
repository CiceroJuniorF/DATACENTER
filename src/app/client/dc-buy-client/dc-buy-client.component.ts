import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DcClientService } from 'app/client/shared/dc-client.service';
import { AppService } from 'app/shared/app.service';

import { Subscription } from 'rxjs';
import { Service } from 'app/client/shared/model/service';
import { DataCenter } from 'app/shared/model/datacenter';
import { Summary } from 'app/client/shared/model/summary';
import { ServiceItem } from 'app/client/shared/model/serviceItem';
import { forEach } from '@angular/router/src/utils/collection';
import { ItemName } from 'app/client/shared/model/itemName';
import { Field } from 'app/client/shared/model/field';
import { User } from 'app/shared/model/user';
import { FieldAditional } from 'app/client/shared/model/fieldAditional';
import { AlertService } from '../../alert/_services';
import { LoadingService } from '../../loading/loading.service';
import { FieldRadio } from '../shared/model/fieldRadio';


@Component({
  selector: 'app-dc-buy-client',
  templateUrl: './dc-buy-client.component.html',
  styleUrls: ['./dc-buy-client.component.css']
})
export class DcBuyClientComponent implements OnInit {
  private services: Service[] = [];
  private service: Service = new Service();
  private idArea: number;
  private idService: number;
  private datacenters: DataCenter[] = [];
  private summary: Summary = new Summary();
  private serviceItems: ServiceItem[] = [];
  private fields: Field[] = [];
  private fieldAdditional: FieldAditional[] = [];
  private fieldRadio: FieldRadio[] = [];
  private fieldCheckSelected: FieldRadio[] = [];
  inscricao: Subscription;
  typesItem: ItemName[] = [];
  isVisible: boolean = false;
  message: string;
  messageError: string[] = [];
  contField = 0;
  aux = 0;
  required: string = "Fields with * are required";
  requiredVisible: boolean = false;
  isOrder: boolean = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private clienteService: DcClientService,
    private serviceApp: AppService, private alert: AlertService, private loading: LoadingService) {
  }

  ngOnInit() {
    //Resgatar Parametros
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.idArea = params['idArea'];
        this.idService = params['idService'];
      });
    //Buscar Area
    this.clienteService.getServicesByArea(this.idArea)
      .subscribe(data => this.getService(data), error => this.erro());
    //Buscar Sevicos
    this.clienteService.getServicesItemByService(this.idService)
      .subscribe(data => this.setItens(data), error => this.erro());
    //BuscarDataCenters
    this.clienteService.getDatacenters(this.idService)
      .subscribe(data => { this.datacenters = data; this.loading.showLoading(false); }, error => this.erro());
    //BuscarFields
    this.clienteService.getFieldsByService(this.idService)
      .subscribe(data => this.getFields(data), error => this.erro());

    //Carregando Sumary
    this.summary.idService = this.idService;
    var user: User = this.clienteService.getAppService().getUser();
    this.summary.idClient = user.clientId;
    this.summary.idUser = user.userIfoId;


  }

  getFields(data) {
    this.fields = data;
    var _fieldAditional;
    var _fieldRadio;
    this.fields.forEach(element => {
      if (element.fieldType == 4) {
        _fieldAditional = new FieldAditional();
        _fieldAditional.id = element.id;
        _fieldAditional.fields = [];
        this.fieldAdditional.push(_fieldAditional);
      }
      if(element.fieldType == 1 || element.fieldType == 2){
        _fieldRadio = new FieldRadio();
        _fieldRadio.id = element.id;
        _fieldRadio.values = element.fieldValues.split("|");
        if((element.fieldValueDefault !== null || element.fieldValueDefault !== undefined) 
        && _fieldRadio.values.find(value => value === element.fieldValueDefault)){
          this.addField(element.fieldValueDefault,element);
        }
        this.fieldRadio.push(_fieldRadio);   
      }
    });
    this.fields.forEach(element => {
      if (element.fieldValueDefault !== null && element.fieldValueDefault !== undefined)
        this.addField(element.fieldValueDefault, element);
    });
    this.loading.showLoading(false);
  }


  getService(data) {
    this.services = data;
    this.service = this.services.filter(service => service.id == this.idService)[0];
    this.loading.showLoading(false);
  }

  setItens(data) {
    this.serviceItems = data;
    this.serviceItems.forEach(element => {
      if (!this.typesItem.find(itemName => itemName.name == element.typeName)) {
        var itemName: ItemName = new ItemName();
        itemName.required = "*";
        itemName.name = element.typeName;
        this.typesItem.push(itemName);
      }

    });
    this.loading.showLoading(false);
  }
  //Carregar Itens Selecionados
  serverItensSelect(serviceItem) {
    if (!this.summary.serviceItem.filter(item => item.typeName === serviceItem.typeName)[0]) {
      this.summary.serviceItem.push(serviceItem);

    } else if (this.summary.serviceItem.filter(item => item.typeName === serviceItem.typeName)[0]) {
      //this.summary.serviceItem.indexOf(this.summary.serviceItem.find(item => item.typeName == serviceItem.typeName));
      this.summary.serviceItem.splice(this.summary.serviceItem.indexOf(serviceItem), 1);
      this.summary.serviceItem.push(serviceItem);
    }
    this.summaryTotal();


  }

  //Calcular Total no Summary
  summaryTotal() {
    this.summary.total = 0.0;
    this.summary.serviceItem.forEach(element => {
      this.summary.total += element.price;
    });
    this.summary.fields.forEach(element => {
      if (element.isUsedForPrice == 1)
        this.summary.total += element.price;
    });
  }

  confirm() {
    this.clienteService.placeOrder(this.summary).subscribe(ok => this.ok(), error => { this.loading.showLoading(false); this.alert.error("Error in order!"); this.isOrder = false });
  }
  ok() {
    this.loading.showLoading(false);
    this.router.navigate(['/cliente']);
    this.alert.success("Order Received!");
  }
  erro() {
    this.loading.showLoading(false);
    this.alert.error('Ocorreu um erro ao carregar os dados!')
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  //Seleciona o Datacenter
  datacenterSelect(datacenter) {
    this.summary.datacenter = datacenter;
    this.isVisible = true;

  }
  //Adiciona o valor do input na field
  addField(inputValue, field) {
    if (field.children) {
      field.value = inputValue;
      this.addFieldToSummary(field);
    } else {
      this.fields.find(iten => iten == field).value = inputValue;
      if (field.value === '' && this.summary.fields.filter(iten => iten.name == field.name)[0]) {
        this.summary.fields.splice(this.summary.fields.indexOf(this.summary.fields.filter(iten => iten.name === field.name)[0]));
        if (field.required == 1)
          return false;
        else
          return true;
      } else if (field.value != '') {
        this.addFieldToSummary(this.fields.find(iten => iten.name == field.name));
      }
    }

    return true;
  }

  //Adiciona as Filds no Summary
  addFieldToSummary(field) {

    if (!this.summary.fields.filter(iten => iten.name === field.name && iten.id === field.id)[0]) {
      this.summary.fields.push(field);
    } else if (this.summary.fields.filter(iten => iten.name === field.name && iten.id === field.id)[0]) {
      this.summary.fields.filter(iten => iten.name === field.name)[0] = field;

    }
  }

  placeOrder() {

    if (this.summary.fields.length < this.fields.length || this.summary.serviceItem.length < this.typesItem.length || this.summary.datacenter.id == null && this.datacenters != null) {
      var name = "";
      if (this.summary.datacenter.id == null && this.datacenters != null) {
        this.alert.error("Select one DataCenter!");
      }
      if (this.summary.fields.length < this.fields.length) {
        this.fields.forEach(element => {
          if (element.value === '' || element.value == null) {
            this.alert.error("Fill in " + element.name);
          }
        });
      }
      if (this.summary.serviceItem.length < this.typesItem.length) {
        this.serviceItems.forEach(element1 => {
          if (!this.summary.serviceItem.find(iten => iten.typeName == element1.typeName) && element1.typeName != name) {
            name = element1.typeName;
            this.alert.error("Select One " + element1.typeName);
          }
        });
      }
      this.requiredVisible = true;

    } else {
      this.isOrder = true;
      this.requiredVisible = false;
    }
  }
  close() {
    this.isOrder = false;
  }
  teste = null;
  setField(field: Field) {
    var fieldFilha = new Field();
    this.contField++;
    var filhas = this.getFieldChildren(field.id).length;


    fieldFilha.name = "" + (filhas + 1);


    fieldFilha.clientServiceId = field.clientServiceId;
    fieldFilha.dataType = field.dataType;
    fieldFilha.fieldDescription = field.fieldDescription;
    fieldFilha.fieldType = field.fieldType;
    fieldFilha.fieldValueDefault = field.fieldValueDefault;
    fieldFilha.fieldValues = field.fieldValues;
    fieldFilha.hint = field.hint;
    fieldFilha.label = field.label;
    fieldFilha.id = field.id;
    fieldFilha.isUsedForPrice = field.isUsedForPrice;
    fieldFilha.price = field.price;
    fieldFilha.required = field.required;
    fieldFilha.value = field.value;
    fieldFilha.children = true;
    //console.log(field.id, fieldFilha.id);
    var xpto = this.fieldAdditional.find(element => element.id === field.id);
    xpto.fields.push(fieldFilha);
    //console.log(xpto.fields);    
    this.addField(fieldFilha.value, fieldFilha);
  }

  getFieldChildren(id) {
    var xpto = this.fieldAdditional.find(element => element.id === id);
    return xpto.fields;
  }
  getFieldValues(id) {
    var xpto = this.fieldRadio.find(element => element.id === id);
    return xpto.values;
  }

  search(fields, field) {
    let fieldzim = fields.find(iten => iten.id === field.id);
    if (fieldzim.name !== field.name) {
      console.log("FALSE");
      return false;
    } else {
      return true;
    }

  }
  confereListaFieldAdditional() {
    if (this.summary.fields.find(iten => iten.fieldType == 4)) {
      return true;
    }
    return false;
  }
  cont = 0;
  delField(field) {
    this.cont++;
    if (field.children) {
      this.summary.fields.splice(this.summary.fields.indexOf(field), 1);


      this.getFieldChildren(field.id).splice(this.getFieldChildren(field.id).indexOf(field), 1);
    }
  }
}
