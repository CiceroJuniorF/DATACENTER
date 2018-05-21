import { Component, OnInit, Input } from '@angular/core';
import { Area } from 'app/client/shared/model/area';
import { Language } from 'app/shared/model/language';
import { ServiceModel } from 'app/admin/shared/models/serviceModel';
import { AdminService } from 'app/admin/shared/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from 'app/client/shared/model/service';
import { EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Field } from '../../../client/shared/model/field';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../../loading/loading.service';
import { AlertService } from '../../../alert/_services';

@Component({
  selector: 'app-dc-field',
  templateUrl: './dc-field.component.html'
})
export class DcFieldComponent implements OnInit {
  listArea: Area[] = [];
  linguas: Language[] = [];
  serviceModel: ServiceModel = new ServiceModel();
  field: Field = new Field();
  fieldEdit: Field = new Field();
  fields: Field[] = [];
  isEdit = false;
  inscricao: Subscription;
  @Output() alterList = new EventEmitter();

  formName: FormGroup;
  constructor(private service: AdminService, private router: Router,
    private route: ActivatedRoute, formBuilder: FormBuilder, private loading: LoadingService, private alert:AlertService) {
    this.formName = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      label: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]]
    });
  }

  ngOnInit() {
    this.resetField();
    //Resgatar Parametros
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        if (params['idService'] != undefined) {
          this.getFields(params['idService']);
        }
      });
    this.alterList.emit(this.fields);


  }

  isRequired(is) {
    this.field.required = is;
  }
  getFields(id) {
    this.service.getFieldsByService(id).subscribe((data) => {
      this.fields = data;
      this.alterList.emit(data);
      this.loading.showLoading(false);
    }, error => {
      this.loading.showLoading(false); this.router.navigate(['/internal-error']);
    });
  }


  resetField() {
    this.field.fieldValues = this.replaceField(this.field.fieldValues);
    this.field = new Field();
    this.field.isUsedForPrice = 0;
    this.field.fieldType = 0;
    this.field.dataType = 'VARCHAR';
    this.field.price = null;
    this.field.required = 1;
  }

  ngAfterContentChecked() {
    this.alterList.emit(this.fields);
  }
  save() {
    //this.fields.splice(this.fields.indexOf(this.fieldEdit));
    this.field.fieldValues = this.replaceField(this.field.fieldValues);
    if (this.isEdit == true) {
      this.isEdit = false;
      this.alterList.emit(this.fields);
      this.resetField();
    } else {
      this.fields.push(this.field);
      this.alterList.emit(this.fields);
      this.resetField();
    }
   
  }

  edit(iten) {
    this.fields = this.fields;
    this.field = iten;
    this.field.fieldValues = this.replaceField2(this.field.fieldValues);
    this.isEdit = true;
    //this.fieldEdit =iten; 
  }

  replaceField(field) {
    let str = field;
    if (field != undefined && field !== '') {
      if (str.search('\n')) {
        str = str.replace(/\n/g, '|');
        if (str.substr(str.length - 1, str.length - 1) === '|') {
          str = str.substr(0, str.length - 1);
        }
      }
    } else {
      str = null;
    }
    return str;
  }

  replaceField2(field) {
    let str = field;
    str = str.replace(/\|/g, '\n');
    return str;
  }

  remove(iten) {
    if (iten.id === null) {
      
    } else {
      this.service.deleFieldIten("field", iten.id).subscribe(data => { this.loading.showLoading(false); this.alert.success("Deletado!");this.fields.splice(this.fields.indexOf(iten), 1); },
        error => { this.loading.showLoading(false); this.alert.error("Erro!") });
    }
  }

  isUserdForPrice(value) {
    this.field.isUsedForPrice = value;
  }

  verifica() {
    if (this.field.fieldType === 0 || this.field.fieldType === "0") {
      return true;
    } else {
      this.field.dataType = 'VARCHAR';
      return false;
    }

  }


}
