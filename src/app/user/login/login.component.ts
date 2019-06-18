import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../../about/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
  // hide=true;

  constructor(private fb: FormBuilder, private router: Router, 
    private authService: AuthService) { }

  onSubmitLogin(userName, password) {
    this.authService.onSubmitLogin(userName, password);
  }

  onLogout(){
    this.authService.isLoggedIn = false;
    this.router.navigate(['home']);
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}

