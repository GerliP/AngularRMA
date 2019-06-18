import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './user/users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AuthService } from './about/auth.service';
import { CreateUserCanDeactivate } from './create.user.CanDeactivate';
import { ProductsComponent } from './products/products.component';
import { ProductsFilter } from './products/products.filter';
import { ProductService } from './product/product.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    UsersComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ProductsFilter,
    ProductsComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [UserService, AuthGuard, AuthService, CreateUserCanDeactivate,
     ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
