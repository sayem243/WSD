class SearchFunctionalities {

   select_product = ':nth-child(1) > .product-item-info'
   product_size= '#option-label-size-143-item-175'
   green_color= '#option-label-color-93-item-53'
   blue_color= '#option-label-color-93-item-50'
   btn_Add_to_cart="#product-addtocart-button"
   pop_up_text=".message-success > div"
   shopping_cart_icon=".action.showcart"
   link_shopping_cart="div[data-bind='html: $parent.prepareMessageForHtml(message.text)'] a"
   price= "th[class='col price'] span"
   orestes_fitness="td[class='col item'] div[class='product-item-details'] a"


   NavigateToURL(){
    cy.visit('https://magento.softwaretestingboard.com/')
 
    }

  SearchIconVerify() {
    cy.get(".mat-search_icon-search").should("be.visible");
    cy.get(
      '.mat-search_icons mat-icon[data-mat-icon-type="font"][aria-hidden="true"]:last-child'
    ).click();
    cy.get("#mat-input-0").type("apple{enter}");
  }

  VerifyTwoApple(){
    cy.get('.mat-grid-tile-content mat-card').should('have.length', 2).each(($product) => {
        cy.wrap($product).contains('Apple')
      })
  }

  BananaProduct(){
    cy.get('.mat-grid-tile-content mat-card').each(($product) => {
        cy.wrap($product).should('not.contain', 'Banana')
      })
  }

  EnterSearchProduct(){
    cy.get("#search").type('Fusion{enter}')
    // cy.get("#qs-option-0").click()
  }

  ReleventProduct(){
    cy.scrollTo(0, 500);
   // cy.get('.product-image-photo')
    cy.contains("fusion-backpack").scrollIntoView().should('be.visible')
    cy.get(".product-item-link").should("contain","Fusion Backpack")
    
  }

  NavigateToProductPage(){
    cy.get("#search").type('Orestes Fitness Short{enter}')
    //cy.get("")
    cy.contains("Orestes Fitness Short").scrollIntoView().should('be.visible')
    cy.get(this.select_product).click()
    }

  Select_Product(){
    //color
    cy.get(this.blue_color).click()
    cy.wait(2000)
    cy.get(this.green_color).click()
    //size
    cy.get(this.product_size).click()
  }
   Add_to_cart(){
     
    cy.get(this.btn_Add_to_cart).click()
    cy.get(this.pop_up_text).should("be.visible","You added Orestes Fitness Short to your shopping cart.")
   }

  cartPage(){
    cy.get(this.link_shopping_cart).click()
    cy.get(this.price).should("contain","Price")
    cy.get(this.orestes_fitness).should("contain","Orestes Fitness Short")
  }   
   

}

export const SearchObj = new SearchFunctionalities();
