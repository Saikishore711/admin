import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { TypeComponent } from './type/type.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard'; 
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ContentComponent,
    BrandComponent,
    CategoryComponent,
    TypeComponent,
    ProductComponent,
    LoginComponent,

   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    SidebarModule
  ],
  providers: [authGuard, AuthService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
