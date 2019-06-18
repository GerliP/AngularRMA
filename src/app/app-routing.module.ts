import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { CreateUserCanDeactivate } from './create.user.CanDeactivate';
import { ProductsComponent } from './products/products.component';




const routes: Routes = [
  { path: '', 
  redirectTo: 'home', pathMatch: 'full' 
  },
{
    path:'home', 
    component:HomeComponent,
  },
  {
    path:'about', 
    component:AboutComponent, canActivate: [AuthGuard],
    children: [
      { path: 'products', component: ProductsComponent},
     
    ] },
  {
    path:'login', 
    component:LoginComponent, 
  },
  {
    path:'sign-up', 
    component:SignUpComponent, canDeactivate: [CreateUserCanDeactivate],
  },
  {
    path:'**', 
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
