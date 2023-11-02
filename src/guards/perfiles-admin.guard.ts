import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticarService } from 'src/app/services/autenticar.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PerfilesAdminGuard implements CanActivate {

  constructor(private autenticarService: AutenticarService, private router:Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.autenticarService.getLocalEmail() == 'admin@gmail.com') {
      console.log('Estas logeado como admin');
      return true;
    } else {
      console.log('No estas logeado como admin');
      this.router.navigate(['/home']);
      return false;
    }

  }

  
}
