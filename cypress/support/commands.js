// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

/**
 * Will click on the mix button then the specific search tile in the param. Then enter in the keywords you give and click search button
 * @method appSearch
 * @param {string} searchTile This will be the tile you want to click on (ex: Normal, Grey Shades, etc...)
 * @param {string} keywords This is what you want to type in the keywords input (ex: 300 BMW 1996, 3R3, Alpine White 3, etc...)
 */
Cypress.Commands.add("appSearch", (searchTile, keywords) => {
  cy.contains("Mix").click();
  cy.contains(searchTile).click();
  cy.get("#keywords").clear().type(keywords);
  cy.get("#search-button").click();
});
import { stamps } from "../fixtures/time-stamp.json";

Cypress.Commands.add("timestamp", (name) => {
  let date = new Date();
  let newStamp = {
    id: name,
    date:
      date.getMonth() +
      "/" +
      date.getDay() +
      "/" +
      date.getFullYear().toString().substr(-2) +
      "," +
      " ",
    time: date.getTime().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  };
  stamps[0].id = newStamp.id;
  stamps[0].date = newStamp.date;
  stamps[0].time = newStamp.time;
});

Cypress.Commands.add("getAccordion", (accordionName)=>{
  return cy.get('p-accordiontab').contains(accordionName);
});

Cypress.Commands.add('getTile', (tileName)=>{
  return cy.get('menu-button').contains(tileName);
});

Cypress.Commands.add("getTab", (tabName)=>{
  return cy.get('li[role="tab"]').contains(tabName);
});