/// <reference types = "cypress" />

it("First test case", function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)

    
    cy.get('.product:visible').should('have.length', 4)

    // finding elements in parent child chaining 
    // counting all the products from list of products
    cy.get('.products').find('.product').should('have.length',4)

    // finding 2nd product from the list of products and clicking on add to cart 
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    
    // finding a particular product cashews from list of product by dynamically going to each product using array and clicking it 

    cy.get('.products').find('.product').each(($e1,index,$list) => {
      
        const textVeg=$e1.find('h4.product-name').text()
          if(textVeg.includes('Cashews'))
          {       
          $e1.find('button').click()
          }

    })

})