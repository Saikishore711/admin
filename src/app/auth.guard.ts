import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService,  } from './auth.service'; // Import your AuthService
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
 
  constructor(public authService: AuthService, private router: Router, private cookieService: CookieService) {}

  // canActivate(): boolean {
  //   if (this.authService.isLoggedIn()) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  // }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.cookieService.get('jwtToken'); // Get the token from the cookie

    if ( token && this.authService.isAuthenticated) {
      // User is authenticated and token is present
      if (state.url === '/home') {
        // If the user is already logged in, prevent access to the login page
        return true;
      }
      else {
        // If the user is not logged in, prevent access to other pages
        this.router.navigate(['/login']);
        return false; // Allow access to other pages
      }
    } else {
      // User is not authenticated or token is missing
      if (state.url === '/login') {
        // If the user is not logged in, allow access to the login page
        return true;
      } else {
        // If the user is not logged in, prevent access to other pages
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
}
