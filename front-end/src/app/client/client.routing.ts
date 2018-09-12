import { Routes, RouterModule } from '@angular/router';
import { DcIndexComponent } from 'app/client/dc-index/dc-index.component';
import { ClientComponent } from 'app/client/client.component';
import { AuthGuard } from 'app/guards/auth.guard';
import { DcServiceByAreaComponent } from 'app/client/dc-service-by-area/dc-service-by-area.component';
import { DcBuyClientComponent } from 'app/client/dc-buy-client/dc-buy-client.component';
import { DcClientsproductsComponent } from 'app/client/dc-clientsproducts/dc-clientsproducts.component';
import { DcDatacentersComponent } from 'app/client/dc-datacenters/dc-datacenters.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';



const GESTAO: Routes = [
  { path: 'cliente', component:ClientComponent,  children:[
    {path: '', component: DcIndexComponent},
    {path:'services/:idArea', component: DcServiceByAreaComponent},
    {path:'clientService/:idArea/:idService', component: DcBuyClientComponent},
    {path:'my-products/:idArea', component: DcClientsproductsComponent},
    {path:'data-center/:idDataCenter', component: DcDatacentersComponent},
    {path:'my-profile', component: ClientProfileComponent}
  ], canActivate:[AuthGuard]}
  
];

export const clientRouting = RouterModule.forChild(GESTAO);