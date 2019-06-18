import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Product } from './product';


@Injectable()
export class ProductService {

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>("http://localhost:49557/api/product");
  }
  getProduct(): Observable <Product> {
    return this._http.get<Product>("http://localhost:49557/api/product");
  }
  addProduct(result: Product) {
    // let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //let options       = new HttpRequest({ headers: headers });
    console.log(result);
    return this._http.post("http://localhost:49557/api/product", result);
  }


}
