import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'app/shared/app.service';



@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private service : AppService, private router:Router) { }

  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) :Observable<boolean>|boolean{
    if(this.service.getUser() != null && this.service.getUser().administrator === 0){
      return true;
    }
    this.router.navigate(['/']);
    return false;
    
  }

}
