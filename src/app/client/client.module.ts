import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from 'app/client/client.component';
import { DcCarouselComponent } from 'app/client/dc-carousel/dc-carousel.component';
import { DcHeaderComponent } from 'app/client/dc-header/dc-header.component';
import { DcCorpClientComponent } from './dc-corp-client/dc-corp-client.component';
import { DcServicesComponent } from './dc-services/dc-services.component';
import { DcFooterComponent } from './dc-footer/dc-footer.component';
import { DcClientService } from 'app/client/shared/dc-client.service';
import { DcIndexComponent } from './dc-index/dc-index.component';
import { clientRouting } from 'app/client/client.routing';
import { DcServiceByAreaComponent } from './dc-service-by-area/dc-service-by-area.component';
import { DcBuyClientComponent } from './dc-buy-client/dc-buy-client.component';
import { DcClientsproductsComponent } from './dc-clientsproducts/dc-clientsproducts.component';
import { DcDatacentersComponent } from './dc-datacenters/dc-datacenters.component';
import { DetailsUploadComponent } from '../admin/upload/details-upload.component';



@NgModule({
  imports: [
    CommonModule,
    clientRouting
  ],
  exports: [ClientComponent,
    DcHeaderComponent,
    DcCarouselComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [ClientComponent,
    DcHeaderComponent,
    DcCarouselComponent,
    DcCorpClientComponent,
    DcServicesComponent,
    DcFooterComponent,
    DcIndexComponent,
    DcServiceByAreaComponent,
    DcBuyClientComponent,
    DcClientsproductsComponent,
    DcDatacentersComponent],
  providers: [DcClientService]
})
export class ClientModule { }
