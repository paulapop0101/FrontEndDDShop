import { authObject } from "./constants";

export const navigateToMiltenyiHomePage = () => {
    cy.visit("/",authObject);
}
export const navigateToProduct = (productId:string)=>{
    cy.visit("/UN-en/"+productId,authObject);
}

export const navigateToCart = ()=>{
    cy.visit("/UN-en/cart",authObject);
}

