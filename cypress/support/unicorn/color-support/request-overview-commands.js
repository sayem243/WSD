import { COLOR_SUPPORT_PATH, REQUEST_OVERVIEW_PATH } from "cypress/support/unicorn/color-support/color-support-command-paths.js";

export async function goToRequestOverviewPath() {
  const SERVICE_REQUEST_OVERVIEW_PATH = `/${COLOR_SUPPORT_PATH}/${REQUEST_OVERVIEW_PATH}`;
  cy.visit(SERVICE_REQUEST_OVERVIEW_PATH);
  cy.wait(4000);
}
