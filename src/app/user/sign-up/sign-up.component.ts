import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { User } from '../User'; 
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  user: User; 
  loading = false; 
  success = false; 

  constructor(private fb: FormBuilder, private router: Router,
    private userService: UserService) {     
      
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ['',  [Validators.required]],
      lastname: ['',  [Validators.required]],
      userName: ['',  [Validators.required, Validators.email]],
      password: ['',  [Validators.required, Validators.minLength(8),]],
      phone: ['',  [Validators.required]],      
      dob: ['',  [Validators.required]]
    });
  }

  get userName(){
    return this.registerForm.get('userName');
  }
  get password(){
    return this.registerForm.get('password');
  }


  onSubmit() {
    this.loading = true; 
    const result: User = Object.assign({}, this.registerForm.value);
    this.userService.addUser(result).subscribe(user=>{
   console.log(result);
   this.success = true; 
   this.registerForm.reset();
 });
 this.loading = false; 
}



}
