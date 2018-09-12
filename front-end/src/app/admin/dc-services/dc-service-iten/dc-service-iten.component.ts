import { Component, OnInit, Input } from '@angular/core';
import { Area } from 'app/client/shared/model/area';
import { Language } from 'app/shared/model/language';
import { ServiceModel } from 'app/admin/shared/models/serviceModel';
import { AdminService } from 'app/admin/shared/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceIten } from 'app/admin/shared/models/service-iten';
import { Service } from 'app/client/shared/model/service';
import { EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceItenType } from '../../shared/models/service-iten-type';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../../loading/loading.service';
import { AlertService } from '../../../alert/_services';


@Component({
  selector: 'app-dc-service-iten',
  templateUrl: './dc-service-iten.component.html'
})
export class DcServiceItenComponent implements OnInit {
  listArea: Area[] = [];
  linguas: Language[] = [];
  serviceModel: ServiceModel = new ServiceModel();
  serviceIten: ServiceIten = new ServiceIten();
  serviceItenEdit: ServiceIten = new ServiceIten();
  serviceItens: ServiceIten[] = [];
  isEdit = false;
  inscricao: Subscription;
  @Output() alterList = new EventEmitter();
  formName: FormGroup;
  serviceItenTypes: ServiceItenType[] = [];

  constructor(private service: AdminService,private alert:AlertService, private router: Router, private route: ActivatedRoute, formBuilder: FormBuilder, private loading: LoadingService) {
    this.formName = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]]
    });
  }

  ngOnInit() {
    this.resetServiceIten();
    this.service.getArea().subscribe(data => { this.listArea = data; this.loading.showLoading(false); }, error => {
      this.loading.showLoading(false); this.router.navigate(['/internal-error']);
    });
    this.service.getServiceItenType().subscribe(data => { this.serviceItenTypes = data; this.loading.showLoading(false); }, error => {
      this.loading.showLoading(false); this.router.navigate(['/internal-error']);
    });
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        if (params['idService'] != undefined) {
          this.getServiceItens(params['idService']);
        }
      });

  }
  ngAfterContentChecked() {
    this.alterList.emit(this.serviceItens);
    this.onServiceItens(this.serviceItens);
  }
  getServiceItens(id) {
    this.service.getServicesItemByService(id).subscribe(data => {
      this.serviceItens = data;
      this.loading.showLoading(false);
    }, error => {
      this.loading.showLoading(false); this.router.navigate(['/internal-error']);
    });
  }
  onServiceItens(itens) {
    let itenss = itens;
    itenss.forEach(element => {
      this.serviceItenTypes.forEach(type => {
        if (element.typeName === type.name) {
          element.type = type.id
        }
      });
    });
    this.serviceItens = itenss;

  }
  event(itens) {
    this.alterList.emit(itens);
  }
  resetServiceIten() {
    this.serviceIten = new ServiceIten();
    this.serviceIten.status = 2;
    this.serviceIten.type = null;
  }

  save() {
    //this.serviceItens.splice(this.serviceItens.indexOf(this.serviceItenEdit));
    if (this.isEdit == true) {
      this.isEdit = false
    } else {
      this.serviceItens.push(this.serviceIten);
    }
    this.alterList.emit(this.serviceItens);
    this.resetServiceIten();
  }

  edit(iten) {
    this.serviceIten = iten;
    this.isEdit = true;
    //this.serviceItenEdit =iten;  
  }
  
  remove(iten) {
    if (iten.id === null) {
      this.serviceItens.splice(this.serviceItens.indexOf(iten), 1);     
    }else{      
      this.service.deleFieldIten("iten", iten.id).subscribe(data => { this.loading.showLoading(false); this.alert.success("Deletado!"); this.serviceItens.splice(this.serviceItens.indexOf(iten), 1); },
        error => { this.loading.showLoading(false); this.alert.error("Erro!");});     
    }
  }

  alterType($event){
    this.service.getServiceItenType().subscribe(data => { this.serviceItenTypes = data; this.loading.showLoading(false); }, error => {
      this.loading.showLoading(false); this.router.navigate(['/internal-error']);
    });
  }

}
