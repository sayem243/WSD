import {
  COLOR_SUPPORT_PATH,
  SPRAYOUT_ASSISTANCE_PATH,
  REPAIR_ORDER_MANAGEMENT_PATH,
  REPAIR_ORDERS_PATH
} from "cypress/support/unicorn/color-support/color-support-command-paths.js";


export async function goToRepairOrders() {
  const REPAIR_ORDER_PATH = `/${REPAIR_ORDER_MANAGEMENT_PATH}/${REPAIR_ORDERS_PATH}`;
  cy.visit(REPAIR_ORDER_PATH);
  cy.wait(6000);
}

export async function createNewRepairOrder(repairOrderNumber) {
  const CREATE_REPAIR_ORDER_BUTTON = cy.get(`.plus-button`);
  CREATE_REPAIR_ORDER_BUTTON.click();
  cy.wait(3000);
  const REPAIR_ORDER_NUMBER_INPUT = cy.get(`#roNumber`);
  REPAIR_ORDER_NUMBER_INPUT.type(`unicorn-test-${repairOrderNumber}`, { log: false }, { force: true });
  cy.wait(2000);
  const REPAIR_ORDER_SUBMISSION_BUTTON = cy.get(`.ng-star-inserted > .full-width > .ui-button-text`);
  REPAIR_ORDER_SUBMISSION_BUTTON.click();
  cy.wait(2000);
}

export async function goToSprayoutAssistancePath() {
  const SPRAYOUT_ASSISTANCE_SUPPORT_PATH = `/${COLOR_SUPPORT_PATH}/${SPRAYOUT_ASSISTANCE_PATH}`;
  cy.visit(SPRAYOUT_ASSISTANCE_SUPPORT_PATH);
  cy.wait(4000);
}

export async function selectRepairJob() {
  const REPAIR_JOB_BUTTON = cy.get(`#repair-job-button`);
  REPAIR_JOB_BUTTON.should('be.visible');
  const REPAIR_JOB_CELL = cy.get(`.ui-table-tbody > :nth-child(1) > :nth-child(4)`);
  REPAIR_JOB_CELL.click();
  cy.wait(2000);
}