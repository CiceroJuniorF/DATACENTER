import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { ClientComponent } from 'app/client/client.component';
import { NotfoundComponent } from 'app/notfound/notfound.component';
import { AuthGuard } from 'app/guards/auth.guard';
import { LoginAuth } from 'app/guards/login-auth.guard';
import { InternalerrorComponent } from 'app/internalerror/internalerror.component';
import { AdminComponent } from 'app/admin/admin.component';
import { AuthAdminGuard } from 'app/guards/auth-admin.guard';




const APP_ROUTES: Routes = [
    {
        path: '', component: LoginComponent,
        canActivate: [LoginAuth]
    },
    {
        path: 'cliente', loadChildren: 'app/client/client.module#ClientModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',loadChildren: 'app/admin/admin.module#AdminModule',
        canActivate: [ AuthAdminGuard ]
    },
    { path: 'internal-error', component: InternalerrorComponent },
    { path: 'not-found', component: NotfoundComponent },
    { path: '**', component: NotfoundComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {useHash: true});