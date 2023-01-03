declare module '*';
declare namespace Cypress {
    interface Chainable<Subject = any> {
      substract(form: number, second: number): Chainable<Element>;
      // login(email : string, password:string): Chainable<Element>;
    }
  }