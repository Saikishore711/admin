import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//content
import { ContentComponent } from './content/content.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { TypeComponent } from './type/type.component';
import { ProductComponent } from './product/product.component'; 
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { AuthLoginGuard } from './auth-login.guard';




const routes: Routes = [
  {path: '', component:ContentComponent,canActivate: [AuthLoginGuard]},


  {path: 'home', component:ContentComponent},
  {path: 'brand', component:BrandComponent},
  {path: 'category', component:CategoryComponent},
  {path: 'type', component:TypeComponent},
  {path: 'product', component:ProductComponent},
  // { path: '', redirectTo: '/test', pathMatch: 'full' },
  {path: 'login', component:LoginComponent},
  // { path: '', redirectTo: '/login', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
