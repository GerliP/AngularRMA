import { ProductsFilter } from './products.filter';

describe('filter products', () => {
 let filter = new ProductsFilter()
 let arr = [];
 let strToCheck = "";


  it('should get empty array if the array or the string are empty', () => {
    expect(filter.transform(arr, strToCheck)).toBe([])

  });
});

