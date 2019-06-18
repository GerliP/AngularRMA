import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';
import { ProductsFilter } from '../products/products.filter';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  search: string = '';
  // resultDisplay: string = '';
  showSpinner: boolean = false;
  products: Product[];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe((productData)=> this.products = productData,
    (error) => {
      console.error(error);
    });
  }

  showResult() {
    this.showSpinner = true;


    setTimeout(() => {
      // this.resultDisplay = this.search;
      this.showSpinner = false;
    }, 2000);
  }
}
