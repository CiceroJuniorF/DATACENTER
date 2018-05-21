import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientModule } from 'app/client/client.module';
import { LoginComponent } from './login/login.component';
import { AppService } from 'app/shared/app.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { routing } from 'app/app.routing';
import { AuthGuard } from 'app/guards/auth.guard';
import { LoginAuth } from 'app/guards/login-auth.guard';
import { InternalerrorComponent } from './internalerror/internalerror.component';
import { AdminModule } from 'app/admin/admin.module';
import { AuthAdminGuard } from 'app/guards/auth-admin.guard';
import { NotificationsModule, NotificationsService } from 'angular4-notify';
import { AlertComponent } from './alert/_directives';
import { AlertService } from './alert/_services';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading/loading.service';
import { UploadFileService } from './admin/upload/upload-file.service';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    InternalerrorComponent,AlertComponent, LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClientModule,
    ReactiveFormsModule,
    routing,AdminModule,
    NotificationsModule 
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [{ provide: Http, useClass: HttpService },AppService, AuthGuard, UploadFileService, LoginAuth,  AuthAdminGuard,NotificationsService,  AlertService,LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
