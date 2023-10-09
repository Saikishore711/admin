import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Input() isAuthenticated: boolean = false;
  sidebarVisible: boolean = false;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private authService: AuthService
  ) { }
  logout() {
    // Clear the jwtToken cookie
    this.cookieService.delete('jwtToken');
 
    // Set isAuthenticated to false
    this.isAuthenticated = false;
 
    // Call the logout function from authService
    this.authService.logout();
 
    // Navigate to the login page
    this.router.navigate(['/Login']);
 
    console.log("logout clicked");
 }
}
