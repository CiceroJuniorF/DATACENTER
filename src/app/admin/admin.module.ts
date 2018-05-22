import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from 'app/admin/admin.component';
import { AdminDcFooterComponent } from 'app/admin/dc-footer/dc-footer.component';
import { AdminDcHeaderComponent } from 'app/admin/dc-header/dc-header.component';
import { DcServicesComponent } from './dc-services/dc-services.component';
import { adminRouting } from 'app/admin/admin.routing';
import { AdminService } from 'app/admin/shared/admin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminListComponent } from './dc-services/list/list.component';
import { AdminFormComponent } from './dc-services/form/form.component';
import { DcServiceItenComponent } from './dc-services/dc-service-iten/dc-service-iten.component';
import { DcGroupComponent } from './dc-services/dc-group/dc-group.component';
import { DcFieldComponent } from './dc-services/dc-field/dc-field.component';
import { DcDatacenterComponent } from './dc-services/dc-datacenter/dc-datacenter.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminClientComponent } from './dc-client/dc-client.component';
import { AdminClientListComponent } from './dc-client/list/list.component';
import { AdminClientFormComponent } from './dc-client/form/form.component';
import { DcIpComponent } from './dc-client/dc-ip/dc-ip.component';
import { DcVlanComponent } from './dc-client/dc-vlan/dc-vlan.component';
import { DcUsersComponent } from './dc-client/dc-users/dc-users.component';
import { StatusPipePipe } from '../pipes/status-pipe.pipe';
import { ServiceTypePipe } from '../pipes/service-type.pipe';
import { FieldTypePipe } from '../pipes/field-type.pipe';
import { FormUploadComponent } from './upload/form-upload.component';
import { DetailsUploadComponent } from './upload/details-upload.component';
import { DcDactacenterComponent } from './dc-dactacenter/dc-dactacenter.component';



@NgModule({
  providers: [AdminService],
  imports: [
    CommonModule,
    BrowserModule,
    adminRouting,
    FormsModule,
    ReactiveFormsModule
    //add to imports
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AdminComponent,
    AdminDcFooterComponent,
    AdminDcHeaderComponent,
    DcServicesComponent,
    AdminListComponent,
    AdminFormComponent,
    DcServiceItenComponent,
    DcGroupComponent,
    DcFieldComponent,
    DcDatacenterComponent,
    AdminClientComponent,
    AdminClientListComponent,
    AdminClientFormComponent,
    DcIpComponent,
    DcVlanComponent,
    DcUsersComponent,
    StatusPipePipe,
    ServiceTypePipe,
    FieldTypePipe,
    FormUploadComponent,
    DetailsUploadComponent,
    DcDactacenterComponent 
  ]
})
export class AdminModule { }
