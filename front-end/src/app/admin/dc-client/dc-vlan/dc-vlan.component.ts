import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import { VLAN } from '../../shared/models/vlan';
import { EventEmitter } from '@angular/forms/src/facade/async';
import { LoadingService } from '../../../loading/loading.service';
import { Subscription } from 'rxjs';
import { AlertService } from '../../../alert/_services';

@Component({
  selector: 'app-dc-vlan',
  templateUrl: './dc-vlan.component.html'
})
export class DcVlanComponent implements OnInit {
  vlan: VLAN;
  vlans: VLAN[] = [];
  vlanEdit: VLAN = new VLAN();
  isEdit: boolean = false;
  formName: FormGroup;
  inscricao: Subscription;
  @Output() alterList = new EventEmitter();
  constructor(private service: AdminService, private router: Router,
    private route: ActivatedRoute, formBuilder: FormBuilder, private loading:LoadingService, private alert:AlertService) {
    this.formName = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      vlan: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]]
    });
  }

  ngOnInit() {
     //Resgatar Parametros
     this.inscricao = this.route.params.subscribe(
      (params: any) => {
        if (params['idCLient'] != undefined) {
          this.service.getVlan(params['idCLient']).subscribe(data => {
            this.vlans = data;
            this.alterList.emit(data);
            this.loading.showLoading(false);
          }, error => { this.loading.showLoading(false); this.alert.error("Ocorreu um erro no carregamento dos dados!") })
        } else {
          this.reset();
        }
      });
    this.reset();
  }
  ngAfterContentChecked() {
    this.alterList.emit(this.vlans);
  }
  reset() {
    this.vlan = new VLAN();
  }

  save() {
    if (this.isEdit == true) {
      this.isEdit = false
    } else {
      this.vlans.push(this.vlan);
    }
    this.alterList.emit(this.vlans);
    this.reset();
  }

  edit(iten) {
    this.vlan = iten;
    this.isEdit = true;
  }

  remove(iten) {
    this.vlans.splice(this.vlans.indexOf(iten), 1);
    this.alterList.emit(this.vlans);
  }

}
