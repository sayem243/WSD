import { waitForOneTrust } from "../support/oneTrust";
/**
 * This is the login script, and needs to be given the brand to login to, as well as the user role you want to test as.
 * @function authLogin
 * @param {String} brand "NA", "RM", or "GL", "Prod NA", "Prod RM", "Prod GL"
 * @param {String} userRole "BASF Administrator", "BASF Color Coordinator", "BASF Colorist", "BASF Key User", "BASF Lab Leader", "BASF Operations Support", "BASF Rep", "Extended Instructor", "External User","Internal User", "International Content Manager", "Limited Instructor", "Local Content Manager", "HQ Distributor Manager", "RO Distributor Manager", "RSO Distributor Manager", "SO Distributor Manager", "Distributor Manager",
 * "MSO HQ Corporate Office Manager", "MSO District Corporate Office Manager", "MSO Area Corporate Office Manager", "HQ Shop Manager", "RO Shop Manager", "RSO Shop Manager", "SO Shop Manager", "MSO HQ Shop Manager", "HQ Painter", "RO Painter", "RSO Painter", "SO Painter", "HQ Shop Painter", "RO Shop Painter", "RSO Shop Painter", "MSO HQ Painter", "MSO District Painter", "MSO Area Painter", "SO Shop Painter", "MSO HQ Shop Painter",
 * "Testor","Translator",
 */

export async function authLogin(brand, userRole, onetrust = true) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  let users = require("../fixtures/users.json");
  let role = userRole;
  let brandUrl = "";
  let brandBody = "";
  let visitHome = "";

  switch (brand) {
    case "NA":
      users = require("../fixtures/na-users.json");
      brandUrl = users.NA.brandUrl;
      brandBody = users.NA[role].brandBody;
      visitHome = users.NA.visitHome;
      break;
    case "GL":
      users = require("../fixtures/gl-users.json");
      brandUrl = users.GL.brandUrl;
      brandBody = users.GL[role].brandBody;
      visitHome = users.GL.visitHome;
      break;
    case "RM":
      users = require("../fixtures/rm-users.json");
      brandUrl = users.RM.brandUrl;
      brandBody = users.RM[role].brandBody;
      visitHome = users.RM.visitHome;
      break;
    case "Prod NA":
      users = require("../fixtures/na-users.json");
      brandUrl = users.prod.NA.brandUrl;
      brandBody = users.prod.NA[role].brandBody;
      visitHome = users.prod.NA.visitHome;
      break;
    case "Prod RM":
      users = require("../fixtures/rm-users.json");
      brandUrl = users.prod.RM.brandUrl;
      brandBody = users.prod.RM[role].brandBody;
      visitHome = users.prod.RM.visitHome;
      break;
    case "Prod GL":
      users = require("../fixtures/gl-users.json");
      brandUrl = users.prod.GL.brandUrl;
      brandBody = users.prod.GL[role].brandBody;
      visitHome = users.prod.GL.visitHome;
      break;
    case "Dev NA":
      users = require("../fixtures/na-users.json");
      brandUrl = users.dev.NA.brandUrl;
      brandBody = users.dev.NA[role].brandBody;
      visitHome = users.dev.NA.visitHome;
      break;
    case "Dev RM":
      users = require("../fixtures/rm-users.json");
      brandUrl = users.dev.RM.brandUrl;
      brandBody = users.dev.RM[role].brandBody;
      visitHome = users.dev.RM.visitHome;
      break;
    case "Dev GL":
      users = require("../fixtures/gl-users.json");
      brandUrl = users.dev.GL.brandUrl;
      brandBody = users.dev.GL[role].brandBody;
      visitHome = users.dev.GL.visitHome;
      break;
    case "UAT NA":
      users = require("../fixtures/na-users.json");
      brandUrl = users.uat.NA.brandUrl;
      brandBody = users.uat.NA[role].brandBody;
      visitHome = users.uat.NA.visitHome;
      break;
    case "UAT GL":
      users = require("../fixtures/gl-users.json");
      brandUrl = users.uat.GL.brandUrl;
      brandBody = users.uat.GL[role].brandBody;
      visitHome = users.uat.GL.visitHome;
      break;
    case "UAT RM":
      users = require("../fixtures/rm-users.json");
      brandUrl = users.uat.RM.brandUrl;
      brandBody = users.uat.RM[role].brandBody;
      visitHome = users.uat.RM.visitHome;
      break;
    case "BETA NA":
      users = require("../fixtures/na-users.json");
      brandUrl = users.betaslot.NA.brandUrl;
      brandBody = users.betaslot.NA[role].brandBody;
      visitHome = users.betaslot.NA.visitHome;
      break;
    case "BETA GL":
      users = require("../fixtures/gl-users.json");
      brandUrl = users.betaslot.GL.brandUrl;
      brandBody = users.betaslot.GL[role].brandBody;
      visitHome = users.betaslot.GL.visitHome;
      break;  
    case "BETA RM":
      users = require("../fixtures/rm-users.json");
      brandUrl = users.betaslot.RM.brandUrl;
      brandBody = users.betaslot.RM[role].brandBody;
      visitHome = users.betaslot.RM.visitHome;
      break;
  }

  await cy
    .request({
      log: true,
      method: "POST",
      form: true,
      headers: { Referer: "https://federation-qa.basf.com/" },
      url: brandUrl,
      body: brandBody,
    })
    .then(() => {
      cy.visit(visitHome);
      cy.intercept("**/api/user/**", (req) => {
        req.continue((res) => {
          if (res.body.steps !== []) {
            res.body.steps = [];
          }
        });
      });
      if (onetrust) {
       if((brand == "NA") || (brand == "Prod NA") || (brand == "Dev NA") || (brand == "UAT NA") || (brand == "BETA NA"))
       {
          cy.xpath("//*[text()='Accept Cookies']", { timeout: 30000 }).click()
       }
       else
       {
          //cy.get('button[id="onetrust-accept-btn-handler"]', { timeout: 30000 }).click();
          cy.xpath("//*[text()='Confirm My Choices']", { timeout: 30000 }).click()
       }
        cy.window().then((win) => {
          win.OneTrust.Close();
        });
        cy.get('#languageButton').click();
        cy.get('#languageContent > div > span > a').eq(7).click({ force: true })
        cy.wait(2500);
      } else {
        return;
      }
    });
}






export async function authLoginMERA(brand, userRole, onetrust = true) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const users = require("../fixtures/meraUsers.json");
  let role = userRole;
  let brandUrl = "";
  let brandBody = "";
  let visitHome = "";

  switch (brand) {
    case "UAT NA":
      brandUrl = users.UAT.NA.brandUrl;
      brandBody = users.UAT.NA[role].brandBody;
      visitHome = users.UAT.NA.visitHome;
      break;
    case "UAT GL":
      brandUrl = users.UAT.GL.brandUrl;
      brandBody = users.UAT.GL[role].brandBody;
      visitHome = users.UAT.GL.visitHome;
      break;
    case "UAT RM":
      brandUrl = users.UAT.RM.brandUrl;
      brandBody = users.UAT.RM[role].brandBody;
      visitHome = users.UAT.RM.visitHome;
      break;
    case "QA NA":
      brandUrl = users.QA.NA.brandUrl;
      brandBody = users.QA.NA[role].brandBody;
      visitHome = users.QA.NA.visitHome;
      break;
    case "QA GL":
      brandUrl = users.QA.GL.brandUrl;
      brandBody = users.QA.GL[role].brandBody;
      visitHome = users.QA.GL.visitHome;
      break;
    case "QA RM":
      brandUrl = users.QA.RM.brandUrl;
      brandBody = users.QA.RM[role].brandBody;
      visitHome = users.QA.RM.visitHome;
      break;
    case "PROD BETASLOT NA":
      brandUrl = users.PROD.BETASLOT.NA.brandUrl;
      brandBody = users.PROD.BETASLOT.NA[role].brandBody;
      visitHome = users.PROD.BETASLOT.NA.visitHome;
      break;
    case "PROD BETASLOT GL":
      brandUrl = users.PROD.BETASLOT.GL.brandUrl;
      brandBody = users.PROD.BETASLOT.GL[role].brandBody;
      visitHome = users.PROD.BETASLOT.GL.visitHome;
      break;
    case "PROD BETASLOT RM":
      brandUrl = users.PROD.BETASLOT.RM.brandUrl;
      brandBody = users.PROD.BETASLOT.RM[role].brandBody;
      visitHome = users.PROD.BETASLOT.RM.visitHome;
      break;
    case "PROD LIVE NA":
      brandUrl = users.PROD.LIVE.NA.brandUrl;
      brandBody = users.PROD.LIVE.NA[role].brandBody;
      visitHome = users.PROD.LIVE.NA.visitHome;
      break;
    case "PROD LIVE GL":
      brandUrl = users.PROD.LIVE.GL.brandUrl;
      brandBody = users.PROD.LIVE.GL[role].brandBody;
      visitHome = users.PROD.LIVE.GL.visitHome;
      break;
    case "PROD LIVE RM":
      brandUrl = users.PROD.LIVE.RM.brandUrl;
      brandBody = users.PROD.LIVE.RM[role].brandBody;
      visitHome = users.PROD.LIVE.RM.visitHome;
      break;
  }

  await cy
    .request({
      log: true,
      method: "POST",
      form: true,
      headers: { Referer: "https://federation-qa.basf.com/" },
      url: brandUrl,
      body: brandBody,
    })
    .then(() => {
      cy.visit(visitHome);
      cy.intercept("**/api/user/**", (req) => {
        req.continue((res) => {
          if (res.body.steps !== []) {
            res.body.steps = [];
          }
        });
      });
      if (onetrust) {
        if((brand == "UAT NA") || (brand == "QA NA") || (brand == "PROD BETASLOT NA") || (brand == "PROD LIVE NA"))
       {
          cy.xpath("//*[text()='Accept Cookies']", { timeout: 30000 }).click()
       }
       else
       {
          //cy.get('button[id="onetrust-accept-btn-handler"]', { timeout: 30000 }).click();
          cy.xpath("//*[text()='Confirm My Choices']", { timeout: 30000 }).click()
       }
        cy.window().then((win) => {
          win.OneTrust.Close();
        });
        cy.get('#languageButton').click();
        cy.get('#languageContent > div > span > a').eq(7).click({ force: true })
        cy.wait(1500);
      } else {
        return;
      }
    });
}