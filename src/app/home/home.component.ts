import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  search: string = '';
  resultDisplay: string = '';
  showSpinner: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showResult() {
    this.showSpinner = true;

    setTimeout(() => {
      this.resultDisplay = this.search;
      this.showSpinner = false;
    }, 2000);
  }
  
}
