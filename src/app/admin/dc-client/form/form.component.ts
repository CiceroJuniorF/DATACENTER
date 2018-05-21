import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/admin.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Language } from '../../../shared/model/language';
import { Client } from '../../shared/models/client';
import { AlertService } from '../../../alert/_services';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../../loading/loading.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class AdminClientFormComponent implements OnInit {
  formName: FormGroup;
  title = "Adicionar Cliente";
  isVlan = true;
  isIp = false;
  isUsers = false;
  isGroup = false;
  linguas: Language[] = [];
  client: Client;
  inscricao: Subscription;
  constructor(private service: AdminService, private router: Router,
    private route: ActivatedRoute,private loading:LoadingService, formBuilder: FormBuilder, private alert: AlertService) {
    this.formName = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      banda: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      document: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]]
    });
  }

  ngOnInit() {
        //Resgatar Parametros
        this.resetClient();
        this.inscricao = this.route.params.subscribe(
          (params: any) => {
            if (params['idCLient'] != undefined) {
              this.service.getClient(params['idCLient']).subscribe(data => {
                this.client = data; 
                console.log(data);               
              }, error => { this.loading.showLoading(false); this.alert.error("Ocorreu um erro no carregamento dos dados!") })
            } else {
              this.resetClient();
            }
          });
    
    this.service.getLinguas().subscribe(data => {this.linguas = data;this.loading.showLoading(false);}, error => {
      this.loading.showLoading(false); this.alert.error("Ocorreu um erro no carregamento, atualize a pagina !");
    });
  }

  resetClient() {
    this.client = new Client();
    this.client.status = 2;
    this.client.languageId = 1;
  }
  openTab(tab) {
    if (tab === 'vlan') {
      this.isVlan = true;
      this.isIp = false;
      this.isUsers = false;
      this.isGroup = false;
    }
    if (tab === 'ip') {
      this.isVlan = false;
      this.isIp = true;
      this.isUsers = false;
      this.isGroup = false;
    }
    if (tab === 'user') {
      this.isVlan = false;
      this.isIp = false;
      this.isUsers = true;
      this.isGroup = false;
    }
    if (tab === 'group') {
      this.isVlan = false;
      this.isIp = false;
      this.isUsers = false;
      this.isGroup = true;
    }
  }

  groupList(event) {
    this.client.group = '';
    event.forEach(element => {
      this.client.group += element.id + ';'
    });
    this.client.group = this.client.group.substr(0, (this.client.group.length - 1));
    if (this.client.group == "") {
      this.client.group = null;
    }

  }
  ipList(event) {
    this.client.ip = "";

    event.forEach(element => {
      this.client.ip +=
        "{" +
        element.id + ';' +
        element.range + ';' +
        element.banda +
        "}";
    });
    if (this.client.ip == "") {
      this.client.ip = null;
    }
  }
  vlanList(event) {
    this.client.vlan = "";

    event.forEach(element => {
      this.client.vlan +=
        "{" +
        element.id + ';' +
        element.vlan + ';' +
        element.name +
        "}";
    });


    if (this.client.vlan == "") {
      this.client.vlan = null;
    }
  }

  userList(event) {
    this.client.user = "";

    event.forEach(element => {
      this.client.user +=
        "{" +
        element.id + ';' +
        element.nome + ';' +
        element.email + ';' +
        element.fone + ';' +
        element.type + ';' +
        element.email + ';' +
        element.senha + ';' +
        element.administrator +
        "}";
    });


    if (this.client.user == "") {
      this.client.user = null;
    }
  }
  save(){
    this.service.saveClient(this.client).subscribe(
      data=>{
        this.router.navigate(['/admin/client']);
        this.alert.success("Cliente "+data+" salvo com sucesso!");
        this.loading.showLoading(false);
    
      },
      error => {this.loading.showLoading(false);this.alert.error("Ocorreu um erro! Por favor verifique se todos os campos obrigatórios estão preenchidos.");})
  }


}
