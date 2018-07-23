import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import { IP } from '../../shared/models/ip';
import { Subscription } from 'rxjs';
import { Service } from '../../../client/shared/model/service';
import { AlertService } from '../../../alert/_services';
import { LoadingService } from '../../../loading/loading.service';

@Component({
  selector: 'app-dc-ip',
  templateUrl: './dc-ip.component.html'
})
export class DcIpComponent implements OnInit {
  ip: IP;
  ips: IP[] = [];
  ipEdit: IP = new IP();
  isEdit: boolean = false;
  formName: FormGroup;
  inscricao: Subscription;
  @Output() alterList = new EventEmitter();
  constructor(private service: AdminService, private router: Router,
    private route: ActivatedRoute, formBuilder: FormBuilder,private loading:LoadingService,private alert:AlertService) {
    this.formName = formBuilder.group({
      range: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      banda: ['', [
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
          this.service.getIp(params['idCLient']).subscribe(data => {
            this.ips = data;
            console.log(data);
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
    this.alterList.emit(this.ips);
  }

  reset() {
    this.ip = new IP();
  }

  save() {
    if (this.isEdit == true) {
      this.isEdit = false
    } else {
      this.ips.push(this.ip);
    }
    this.alterList.emit(this.ips);
    this.reset();
  }

  edit(iten) {
    this.ip = iten;
    this.isEdit = true;
  }

  remove(iten) {
    this.ips.splice(this.ips.indexOf(iten), 1);
    this.alterList.emit(this.ips);
  }

}
