/// <reference types= "Cypress" />
import { Login_Checkout } from "../../Page object  Model/loginCheckout";
import { SearchObj } from "../../Page object  Model/search";

Given(/^Navigate to the url$/, () => {
  SearchObj.NavigateToURL()
});

And(/^Enter the products in search$/, () => {
  SearchObj.EnterSearchProduct();
});

And(/^Verify that the results page dispalyed with relevant products$/, () => {
  SearchObj.ReleventProduct()
});

And(/^Navigate to product page$/, () => {
  SearchObj.NavigateToProductPage()
});



And(/^Select the product option$/, () => {
  SearchObj.Select_Product()

});

Then(/^Add the product to the cart and verify it appears in the cart$/,()=>{
  SearchObj.Add_to_cart()
})

And(/^Navigate to the cart page and confirm the product details$/,()=>{
  SearchObj.cartPage()
})