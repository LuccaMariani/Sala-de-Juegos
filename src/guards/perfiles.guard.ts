import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticarService } from 'src/app/services/autenticar.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PerfilesGuard implements CanActivate, CanDeactivate<unknown> {

  constructor(private autenticarService: AutenticarService, private router:Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.autenticarService.getLocalEmail() != '') {
      console.log('Estas logeado con este email:',this.autenticarService.getLocalEmail()  );
      return true;
    } else {
      console.log('No estas logeado :(');
      return this.router.navigate(['/home']);
    }

  }


  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return false;
  }

}
