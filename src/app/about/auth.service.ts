import { Injectable } from "@angular/core";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from "@angular/common/http";
import { UserService } from '../user/user.service';
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class AuthService{
    redirectUrl: string;
    isLoggedIn = false;
    isLoginError: boolean;
    
    constructor(private _http: HttpClient, private userService: UserService, private router: Router) {
        console.log('hello');
     }

     onSubmitLogin(userName, password) {
        //const result: User = Object.assign({}, this.loginForm.value);
        this.userService.userAuthentication(userName, password)
          .subscribe(() => {  
            this.router.navigate(['home']); 
          //  this.isLoggedIn = true; 
            return Observable.of(true).delay(1000).do(val =>
            {
              this.isLoggedIn=true;     
            });
             
          },
            (err: HttpErrorResponse) => {
              this.isLoginError = true;
              console.log(err);
            });
        
         }
    logout(): void{
        
    }
}