Feature: Search

# Scenario: Verify Search functionality
#  Given Navigate to the url
#  And  Enter the products in search 
#  Then Verify that the results page dispalyed with relevant products


Scenario: Cart functionality operates correctly
 Given Navigate to the url
 And  Navigate to product page
 And Select the product option
 Then Add the product to the cart and verify it appears in the cart
 And Navigate to the cart page and confirm the product details