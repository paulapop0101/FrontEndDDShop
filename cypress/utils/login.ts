export const login = (email :string,password:string)=>{
    cy.visit('http://localhost:4200/login');
    cy.get('form.ng-untouched > :nth-child(1) > .form-control').type(email)
    cy.get(':nth-child(2) > .form-control').type(password);
    cy.get('form.ng-valid > .btn').click();
    // cy.location('pathname').should('eq','/')
    cy.visit('http://localhost:4200');
}
