///<reference types="cypress" />

describe("My third test suite", function(){

it("My first test case", function(){

  //check boxes
  cy.visit("http://rahulshettyacademy.com/AutomationPractice/")
  // .and is used to joint more than one assertion check with should
  cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
  cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

  //clicking more than one checkbox together
  cy.get('input[type="checkbox"]').check(['option2','option3']) 

  // Static Dropdown
  

 








})    












})