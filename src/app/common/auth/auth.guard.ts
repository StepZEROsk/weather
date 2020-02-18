import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.getUser()) {
      return true;
    }

    this.router.navigate(['/user/sign-in'], {
      queryParams: {
        returnUrl: state.url,
      },
    }).then(() => {
      return false;
    });
  }
}
