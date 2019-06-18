import { Component, OnInit } from '@angular/core';
import { User } from '../User'; 
import { UserService } from '../user.service';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'], 
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  userList: User[];  
  statusMessage: string = 'Loading data. Please wait...';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe((userData)=> this.userList = userData, 
    (error) => {
      this.statusMessage = 'Problem with the service. Please try again!'; 
      console.error(error);
    });
  }
  
}


  


