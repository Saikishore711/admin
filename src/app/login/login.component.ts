import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // emailID: string = '';
  // loginPassword: string = '';

  // constructor(private authService: AuthService, private router: Router,
  //   private http: HttpClient,
  //   private cookieService: CookieService,) {}

  //   login() {
  //     if (this.emailID.trim() !== '' && this.loginPassword.trim() !== '') {
  //       // Call the AuthService's login method with provided email and password
  //       this.authService.login(this.emailID, this.loginPassword);
  //     } else {
  //       // Handle empty fields or validation as needed
  //       alert('Please enter both email and password.');
  //     }
  //   }


  // login() {
  //   // Here, you can check the username and password against a predefined set
  //   // of credentials, or you can make an API call to authenticate the user.
  //   // For simplicity, let's assume you have predefined credentials.

  //   if (this.username === 'hi' && this.password === 'hi') {
  //     // Authentication successful
  //     this.authService.login();

  //     // Navigate to the home page after successful login
  //     this.router.navigate(['/home']);
  //   } else {
  //     // Authentication failed
  //     alert('Invalid username or password');
  //   }
  // }
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
//          this.authService.login();
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

signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.signInForm = this.fb.group({
      emailID: ['', [Validators.required, Validators.email]],
      loginPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
    });
  }

  ngOnInit(): void {}
  getControl(name: any) : AbstractControl | null {
    return this.signInForm.get(name)
  }
  onSubmit() {
    const emailID = this.signInForm.value.emailID;
    const loginPassword = this.signInForm.value.loginPassword;

    if (emailID && loginPassword) {
      this.authService.login(emailID, loginPassword);
    } else {
      Swal.fire('Error', 'Please enter all the fields', 'error');
    }
  }


}
