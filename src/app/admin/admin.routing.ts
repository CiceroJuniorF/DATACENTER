import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'app/admin/admin.component';
import { AuthAdminGuard } from 'app/guards/auth-admin.guard';
import { DcServicesComponent } from 'app/admin/dc-services/dc-services.component';
import { AdminListComponent } from 'app/admin/dc-services/list/list.component';
import { AdminFormComponent } from 'app/admin/dc-services/form/form.component';
import { DcFieldComponent } from 'app/admin/dc-services/dc-field/dc-field.component';
import { DcServiceItenComponent } from 'app/admin/dc-services/dc-service-iten/dc-service-iten.component';
import { DcGroupComponent } from 'app/admin/dc-services/dc-group/dc-group.component';
import { DcDatacenterComponent } from 'app/admin/dc-services/dc-datacenter/dc-datacenter.component';
import { AdminClientComponent } from './dc-client/dc-client.component';
import { AdminClientListComponent } from './dc-client/list/list.component';
import { AdminClientFormComponent } from './dc-client/form/form.component';
import { DcDactacenterComponent } from './dc-dactacenter/dc-dactacenter.component';
import { DcClientService } from '../client/shared/dc-client.service';
import { DcClientServiceComponent } from './dc-client-service/dc-client-service.component';
import { DcControlServiceItenTypeComponent } from './dc-control-service-iten-type/dc-control-service-iten-type.component';
import { DcImagesCarrouselComponent } from './dc-images-carrousel/dc-images-carrousel.component';


const GESTAO: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', redirectTo: 'services',pathMatch: 'full' },
      {
        path: 'services', component: DcServicesComponent, children: [
          { path: '', component: AdminListComponent },
          {
            path: 'form', component: AdminFormComponent
          },
          {
            path: 'form/:idService', component: AdminFormComponent
          }        
        ]
      },{ path: 'client', component: AdminClientComponent, children: [
        { path: '', component: AdminClientListComponent },
        {
          path: 'form', component: AdminClientFormComponent
        },
        {
          path: 'form/:idCLient', component: AdminClientFormComponent
        }]},
        { path: 'datacenter', component: DcDactacenterComponent},
        { path: 'client-service', component: DcClientServiceComponent},
        { path: 'service-iten-type-control', component: DcControlServiceItenTypeComponent},
        { path: 'carrousel-options', component: DcImagesCarrouselComponent},
        
    ],
    canActivate: [AuthAdminGuard]
  }
];
export const adminRouting = RouterModule.forChild(GESTAO);