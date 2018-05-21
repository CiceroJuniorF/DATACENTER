import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../shared/admin.service';
import { AlertService } from '../../../alert/_services';
import { UserType } from '../../shared/models/user-type';
import { User } from '../../shared/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../../loading/loading.service';

@Component({
  selector: 'app-dc-users',
  templateUrl: './dc-users.component.html'
})
export class DcUsersComponent implements OnInit {
  userType: UserType[] = [];
  user: User;
  users: User[] = [];
  isEdit: boolean = false;
  formName: FormGroup;
  inscricao: Subscription;
  @Output() alterList = new EventEmitter();
  constructor(formBuilder: FormBuilder, private service: AdminService, private alert: AlertService, private router: Router,
    private route: ActivatedRoute, private loading:LoadingService) {
    this.formName = formBuilder.group({
      nome: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      email: ['', [
        Validators.required,
        Validators.maxLength(30), Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]],
      senha: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      fone: ['', [
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
          this.service.getUser(params['idCLient']).subscribe(data => {
            this.users = data;
            this.alterList.emit(data);
            this.loading.showLoading(false);
          }, error => { this.loading.showLoading(false); this.alert.error("Ocorreu um erro no carregamento dos dados!") })
        } else {
          this.reset();
        }
      });
      this.reset();
    this.service.getUserType().subscribe(data => {this.userType = data; this.loading.showLoading(false);}, error => { this.loading.showLoading(false); this.alert.error("Ocorreu um erro no carregamento dos dados!") })
  }

  ngAfterContentChecked() {
    this.alterList.emit(this.users);
  }

  reset() {
    this.user = new User();
    this.user.administrator = 0;
  }

  save() {
    if (this.isEdit == true) {
      this.isEdit = false
    } else {
      this.users.push(this.user);
    }
    this.alterList.emit(this.users);
    this.reset();
  }

  edit(iten) {
    this.user = iten;
    this.isEdit = true;
  }

  remove(iten) {
    if (iten.id === null) {
      this.users.splice(this.users.indexOf(iten), 1);
    } else {
      this.service.deleteUserInfo(iten.id).subscribe(data => { this.loading.showLoading(false); this.alert.success("Deletado!") },
        error => { this.loading.showLoading(false); this.alert.error("Erro!") });
      this.ngOnInit();
    }
  }

  isAdmin(isAdmin){
    this.user.administrator = isAdmin;
  }
}
