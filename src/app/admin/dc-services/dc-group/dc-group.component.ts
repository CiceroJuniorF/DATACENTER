import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';
import { Group } from '../../shared/models/group';
import { AdminService } from '../../shared/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from '../../../alert/_services';
import { LoadingService } from '../../../loading/loading.service';

@Component({
  selector: 'app-dc-group',
  templateUrl: './dc-group.component.html'
})
export class DcGroupComponent implements OnInit {

  groups: Group[] = [];
  checkedGroup: Group[] = [];
  inscricao: Subscription;
  @Output() alterList = new EventEmitter();
  constructor(private service: AdminService, private loading: LoadingService, private route: ActivatedRoute, private router: Router, private alert: AlertService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        if (params['idCLient'] != undefined) {
          this.onGroupss();
          this.onGroupsClient(params['idCLient']);          
        } else {
          this.onGroups(params['idService']);
        }
      });

  }
  ngAfterContentChecked() {
    this.alterList.emit(this.checkedGroup);
  }
  onGroups(id) {
    if (id != undefined) {
      this.service.getGroupsSelected(id).subscribe(data => {
        this.groups = data;
        this.groups
          .forEach(element => {
            if (element.selected == 1) {
              this.updateGroups(element);
            }
          });
        this.loading.showLoading(false);
      }, error => this.alert.error("Ocorreu um erro no carregamento dos dados."))
    } else {
      this.service.getGroups(-1).subscribe(data => { this.groups = data; this.loading.showLoading(false); }, error => { this.loading.showLoading(false); this.alert.error("Ocorreu um erro no carregamento dos dados.") });
    }


  }

  onGroupss(){
    this.service.getGroups(-1).subscribe(data => {this.groups = data;
      this.loading.showLoading(false);
    }, error => { this.loading.showLoading(false); this.alert.error("Ocorreu um erro no carregamento dos dados."); });
  }
 
  onGroupsClient(id) {
    this.service.getGroups(-1).subscribe(data => {
      this.service.getGroupClient(id).subscribe(dados => {
        data.forEach(element => {
          dados.forEach(group => {
            if (element.id == group.groupTypeId) {
              element.selected = 1;
              this.groups.find(value => value.id == element.id).selected = 1;
            }
          });
        });
        this.loading.showLoading(false);
      },
        error => { this.loading.showLoading(false); this.alert.error("Ocorreu um erro no carregamento dos dados."); });
      this.checkedGroup = data;
      this.loading.showLoading(false);
    }, error => { this.loading.showLoading(false); this.alert.error("Ocorreu um erro no carregamento dos dados."); });

  }

  updateGroups(group) {
    if (this.checkedGroup.find(item => item.id == group.id)) {
      this.checkedGroup.splice(this.checkedGroup.indexOf(group), 1);
    } else {
      this.checkedGroup.push(group);
    }
    this.alterList.emit(this.checkedGroup);

  }
}
