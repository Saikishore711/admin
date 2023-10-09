import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MAK-Admin';
  isAuthenticated: boolean = false; 
  constructor(public authService: AuthService) {
    this.authService.initializeAuthenticationState();
    this.authService.authenticationChanged.subscribe((isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
    });
  }
}
