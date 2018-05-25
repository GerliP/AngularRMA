import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
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

  constructor(private fb: FormBuilder, private router: Router,
    private userService: UserService) {     
      
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ['',  [Validators.required]],
      lastname: ['',  [Validators.required]],
      userName: ['',  [Validators.required]],
      password: ['',  [Validators.required]],
      phone: ['',  [Validators.required]],      
      dob: ['',  [Validators.required]]
    });
  }


  onSubmit() {
    const result: User = Object.assign({}, this.registerForm.value);
    this.userService.addUser(result).subscribe(user=>{
   console.log(result);
   this.registerForm.reset();
 });
 

}

}
