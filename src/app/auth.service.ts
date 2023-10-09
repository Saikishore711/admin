import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//   public isAuthenticated = false;
//   authenticationChanged = new Subject<boolean>();

//   constructor(private router: Router,
//     private http: HttpClient,
//     private cookieService: CookieService,) {
//       // this.isAuthenticated = localStorage.getItem('authenticated') === 'true';
//       this.isAuthenticated = !!this.cookieService.get('jwtToken');
//       this.initializeAuthenticationState();
//     }
//   // login() {
//   //   // Implement your login logic here
//   //   this.isAuthenticated = true;
//   // }

//   login(emailID: string, loginPassword: string) {
//     const url = 'http://localhost:5175/DBClass/Login';
//    // const url = 'http://api.makarenagroup.com/DBClass/Login';

//    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

//    this.http
//      .post(url, { emailID, loginPassword }, { headers })
//      .subscribe(
//        (response: any) => {
//          console.log('Login successful', response);
//          const token = response.token;
//          this.cookieService.set('jwtToken', token, 1);
//          this.isAuthenticated = true;
//          this.authenticationChanged.next(true);
//          this.router.navigate(['/home']);
//          // Handle successful login, e.g., navigate to home page
//        },
//        (error: any) => {
//          console.error('Login failed', error);
//          if (error instanceof HttpErrorResponse) {
//            Swal.fire('Error', 'Please enter all the fields', 'error');
//            console.log('Status:', error.status);
//            console.log('Body:', error.error);
//            Swal.fire('Error', 'Invalid Credentials', 'error');
//          }
//          // Handle login error, e.g., show error message to user
//        }
//      );
//  }

//  initializeAuthenticationState() {
//   // Check for the presence of the JWT token in cookies
//   const token = this.cookieService.get('jwtToken');
//   this.isAuthenticated = !!token;
//   this.authenticationChanged.next(this.isAuthenticated);
// }

//   logout() {
//     // Implement your logout logic here
//     this.cookieService.delete('jwtToken');
//     this.isAuthenticated = false;
//     // localStorage.removeItem('authenticated');
//   }

//   isLoggedIn() {
//     return this.isAuthenticated;
//   }
//   isAuthenticatedUser(): boolean {
//     return this.isAuthenticated;
//   }

//   setAuthenticated(value: boolean) {
//     this.isAuthenticated = value;
//     this.authenticationChanged.next(value);
//   }

public isAuthenticated = false;
authenticationChanged = new Subject<boolean>();

constructor(
  private http: HttpClient,
  private cookieService: CookieService,
  private router: Router
) {
  // Initialize the authentication state from the JWT token in cookies
  this.isAuthenticated = !!this.cookieService.get('jwtToken');
  this.initializeAuthenticationState();
}

login(emailID: string, loginPassword: string) {
   const url = 'http://localhost:5175/DBClass/Login';
  // const url = 'http://api.makarenagroup.com/DBClass/Login';

  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  this.http
    .post(url, { emailID, loginPassword }, { headers })
    .subscribe(
      (response: any) => {
        console.log('Login successful', response);
        const token = response.token;
        this.cookieService.set('jwtToken', token, 1);
        this.isAuthenticated = true;
        this.authenticationChanged.next(true);
        this.router.navigate(['/home']);
        // Handle successful login, e.g., navigate to home page
      },
      (error: any) => {
        console.error('Login failed', error);
        if (error instanceof HttpErrorResponse) {
          Swal.fire('Error', 'Please enter all the fields', 'error');
          console.log('Status:', error.status);
          console.log('Body:', error.error);
          Swal.fire('Error', 'Invalid Credentials', 'error');
        }
        // Handle login error, e.g., show error message to user
      }
    );
}

initializeAuthenticationState() {
  // Check for the presence of the JWT token in cookies
  const token = this.cookieService.get('jwtToken');
  this.isAuthenticated = !!token;
  this.authenticationChanged.next(this.isAuthenticated);
}

logout() {
  // Remove the JWT token from cookies
  this.cookieService.delete('jwtToken');
  this.isAuthenticated = false;
  this.authenticationChanged.next(false);
  // Handle logout, e.g., navigate to the login page
}

isAuthenticatedUser(): boolean {
  return this.isAuthenticated;
}

setAuthenticated(value: boolean) {
  this.isAuthenticated = value;
  this.authenticationChanged.next(value);
}


}
