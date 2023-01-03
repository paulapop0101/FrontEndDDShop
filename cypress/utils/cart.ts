import { PRODUCT_IDS } from "cypress/e2e/smoke-tests/cartSmokeTests.spec.cy";
import { QuantityModificationType } from "cypress/models/QuantityModificationType";

export const changeQuantityOfProductBy=(productCode:typeof PRODUCT_IDS[number],quantityToModify:number,contorState: QuantityModificationType)=>{

 
 
    cy.get('[data-cy="mb-cart-item-code"]').contains(productCode).parents('mb-cart-item').as('item');
    if(contorState==QuantityModificationType.UP)
        cy.get("@item").find('.up-btn').eq(1).as("quantityButton")
    if(contorState==QuantityModificationType.DOWN)
        cy.get("@item").find('.down-btn').eq(1).as("quantityButton")
    

    Cypress._.times(quantityToModify,()=>{
            cy.get("@quantityButton").click({force: true})
        })

}
export const changeQuantityOfProductTo=(index:number,quantity:number)=>{

    cy.get('mb-cart-item').eq(index).as('item')
    cy.get('@item').find('input').first().click({force: true}).clear().type(quantity+"",{force: true})
    cy.get('@item').click() // to update

}

export const checkQuantity=(index:number,rightQuantity:number)=>{
    cy.get('mb-cart-item').eq(index).find('input').first().as("quantity")
    cy.get('@quantity').invoke('val').should('equal',rightQuantity+"")
}