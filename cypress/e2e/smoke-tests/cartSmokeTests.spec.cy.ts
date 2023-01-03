import { waitForAsync } from "@angular/core/testing";
import { QuantityModificationType } from "cypress/models/QuantityModificationType";
import { changeQuantityOfProductBy, changeQuantityOfProductTo, checkQuantity } from "cypress/utils/cart";
import { navigateToCart, navigateToMiltenyiHomePage, navigateToProduct } from "cypress/utils/navigation"
import { addToCart } from "cypress/utils/product";
import { goToProduct } from "cypress/utils/product.spec";


export const PRODUCT_IDS = [
    "130-091-993","130-124-005","130-123-569"
] as const

describe('add to cart', () => {
    beforeEach('add products in cart',()=>{
        PRODUCT_IDS.forEach((data)=>{
            navigateToProduct(data)
            addToCart();
        })
        navigateToCart();
    })
    it.only('change quantity by',()=>{
        changeQuantityOfProductBy("130-091-993",3,QuantityModificationType.UP)
        checkQuantity(0,4) 
    })

    it('change quantity to',()=>{
        changeQuantityOfProductTo(1,2)
        checkQuantity(1,2)
    })

})
