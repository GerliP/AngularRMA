import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../about/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 
  constructor(private router: Router,
    private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
  
    }
    
  }

