export const addToCart=()=>{
        cy.intercept("POST","**/entries?qty=1&lang=en&curr=USD").as("RequestPrice")
        cy.get('[data-cy="mb-product-line-request-price"]').first().
            should('exist').and('be.visible').click({force: true});
        cy.wait("@RequestPrice")
}


// export const goToProduct = (categoryName : string,subcategoryName:string,productId:number)=>{
//     cy.visit('http://localhost:4200');
//     cy.contains(categoryName).should('exist').and('be.visible').click()
//     cy.contains(subcategoryName).should('exist').and('be.visible').click()
//     cy.get('[data-cy= "mb-related-products-item'+productId+'"]').should('exist').and('be.visible').click()
    
// }

// export const addToCart=(color:string, size:string)=>{
//     let textBefore : string;

//     cy.get('[data-cy="itemsCount"]').invoke('text').then((invokedText)=>{
//         textBefore=invokedText;
//     })

//     cy.get('[data-cy="color:'+ color +'"]').should('exist').and('be.visible').click();
//     cy.get('[data-cy="size:'+ size +'"]').should('exist').and('be.visible').click();

//     cy.intercept("POST",'**/addCartEntry/*').as('addToCartRequest')
//     cy.get('.mat-focus-indicator').should('exist').and('be.visible').click()
//     cy.get('@addToCartRequest').wait
    
//     cy.wrap('entering cypress promise chain').then(()=>{
//         checkCartCount(textBefore)
//     })
   
// }

// function checkCartCount(beforeText:string) {
//     let nr = parseInt(beforeText) + 1;
//     cy.get('[data-cy="itemsCount"]').should('have.text',nr)
    
// }
// export const tryWithoutSize = (color? :string)=>{
//     if(color)
//         cy.get('[data-cy="color:'+ color +'"]').should('exist').and('be.visible').click();

//     cy.intercept("POST",'**/addCartEntry/*').as('addToCartNoRequestt')
//     cy.get('.mat-focus-indicator').should('exist').and('be.visible').click()
//     cy.get('@addToCartNoRequestt').should('eq',null);
// }