import { PipeTransform, Pipe, Injectable } from "@angular/core";
import { Product } from "../product/product";

@Pipe({name: "productsFilter"})
@Injectable()
export class ProductsFilter implements PipeTransform{

    transform(products: Product[], search: string): any {
      
        if (search && products.length > 0) {
  
         let itemsFound = products.filter(
           product => product.name && product.name.toLowerCase().includes(search.toLowerCase())
         );
         if (itemsFound && itemsFound.length > 0){
           return itemsFound;
         }
         return [-1]; // to display error message (none found) in view.
       }
     return [];
   }
  
}

