/// <reference types="Cypress" />
import {login} from './utils/login.spec';
import { addToCart, goToProduct, tryWithoutSize } from './utils/product.spec';

describe('add to cart', () => {
  beforeEach(()=>{
   login("maria@gmail.com","Mariaaaa") 
  })
  it('with request',()=>{
    goToProduct('women','pants',49);
    addToCart("yellow","M");
  })
  it('should not make a request',()=>{
    goToProduct('women','pants',49);
    tryWithoutSize();
  })
  
})