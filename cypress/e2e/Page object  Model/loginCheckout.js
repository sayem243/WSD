/* eslint-disable*/
///  <reference types="Cypress" />
// var data= require('../../../../fixtures/createusers.json')
let data= require('../../fixtures/login.json')

class loginCheckout {

  NavigateToUrl(){
    cy.visit('https://magento.softwaretestingboard.com/')
   
    cy.wait(40)
   
  }


}

export const Login_Checkout = new loginCheckout();
