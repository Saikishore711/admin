import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.cookieService.get('jwtToken'); // Get the token from the cookie

    if (this.authService.isAuthenticatedUser()) {
      // User is authenticated, redirect to /ecom-landingpage
      this.router.navigate(['/home']);
      return false;
    } else {
      // User is not authenticated, allow access to login page
      // this.router.navigate(['/login']);
      return true;
    }
  
}
}
