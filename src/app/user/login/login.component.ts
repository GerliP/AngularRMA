import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoginError : boolean = false; 
  user: User; 
 // hide=true;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  onSubmitLogin(userName, password) {
    //const result: User = Object.assign({}, this.loginForm.value);
    this.userService.userAuthentication(userName, password)
    .subscribe((data : any)=>{
    //localStorage.setItem('userToken', data.access_token);
    this.router.navigate(['home']);
    },
    (err : HttpErrorResponse) =>{
      this.isLoginError = true;
    });
  }

 

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]], 
      password: ['', [Validators.required]], 
    });
  }

}

