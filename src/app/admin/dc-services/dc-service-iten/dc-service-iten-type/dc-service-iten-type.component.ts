import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/forms/src/facade/async';
import { ServiceItenType } from '../../../shared/models/service-iten-type';
import { AdminService } from '../../../shared/admin.service';
import { AlertService } from '../../../../alert/_services';
import { LoadingService } from '../../../../loading/loading.service';

@Component({
  selector: 'app-dc-service-iten-type',
  templateUrl: './dc-service-iten-type.component.html'
})
export class DcServiceItenTypeComponent implements OnInit {

  @Output() saveType = new EventEmitter();
  type:ServiceItenType =new ServiceItenType();
  constructor(private service: AdminService,private alert:AlertService,private loading:LoadingService) { }

  ngOnInit() {
  }

  save(){
    this.service.saveServiceItenType(this.type).subscribe(data => {       this.loading.showLoading(false); 
      this.alert.success("Salvo com sucesso!");
      
    }, error => {
      this.loading.showLoading(false); this.alert.error("Ocorreu um erro ao salvar!");
    });
    this.saveType.emit();
  }
}
