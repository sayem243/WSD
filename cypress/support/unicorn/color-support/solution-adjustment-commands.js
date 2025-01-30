export async function goToSelectedAdjustmentMix() {
  const ADJUSTMENT_SELECTION_MIX_BUTTON = cy.get(`#adjustment-selection-mix-button`);
  ADJUSTMENT_SELECTION_MIX_BUTTON.click();
  cy.wait(2000);
}

export async function goToSelectedAdjustmentSatisfaction() {
  const ADJUSTMENT_MIX_FINISH_BUTTON = cy.get(`#adjustment-mix-finish-button`);
  ADJUSTMENT_MIX_FINISH_BUTTON.click();
  cy.wait(2000);
}

export async function giveThumbsUpRatingForSatisfiedSolutionAdjustment() {
  const RATE_NEW_SPRAYOUT_BUTTON = cy.get(`#adjustment-satisfaction-rate-button`);
  RATE_NEW_SPRAYOUT_BUTTON.should('be.visible');
  const THUMBS_UP_BUTTON = cy.get(`#adjustment-satisfaction-thumbs-up-button`);
  THUMBS_UP_BUTTON.click();
  cy.wait(1000);
}

export async function confirmSatisfiedSolutionAdjustmentIsSaved() {
  const FORMULA_SAVE_CONFIRMATION = cy.get(`#adjustment-satisfaction-confirmation`);
  FORMULA_SAVE_CONFIRMATION.should('be.visible');
  cy.wait(1000);
}

export async function giveThumbsDownRatingForSatisfiedSolutionAdjustment() {
  const THUMBS_DOWN_BUTTON = cy.get(`#adjustment-satisfaction-thumbs-down-button`);
  THUMBS_DOWN_BUTTON.click();
  cy.wait(1000);
  const HOW_DO_YOU_WANT_TO_PROCEED_BUTTON = cy.get(`#adjustment-satisfaction-proceed-button`);
  HOW_DO_YOU_WANT_TO_PROCEED_BUTTON.should('be.visible');
  cy.wait(1000);
  const INITIATE_SERVICE_REQUEST_BUTTON = cy.get(`#adjustment-satisfaction-service-request-button`);
  INITIATE_SERVICE_REQUEST_BUTTON.click();
  cy.wait(1000);
}