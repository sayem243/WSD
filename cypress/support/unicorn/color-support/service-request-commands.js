import { COLOR_SUPPORT_PATH, SERVICE_REQUEST_PATH } from "cypress/support/unicorn/color-support/color-support-command-paths.js";

export async function goToSubmitServiceRequestPath() {
  const SUBMIT_SERVICE_REQUEST_PATH = `/${COLOR_SUPPORT_PATH}/${SERVICE_REQUEST_PATH}`;
  cy.visit(SUBMIT_SERVICE_REQUEST_PATH);
  cy.wait(4000);
}

export async function verifySelectedRepairJobIsLinkedToServiceRequest() {
  const SERVICE_REQUEST_FORM_HEADER = cy.get(`#request-form-header`);
  SERVICE_REQUEST_FORM_HEADER.should('be.visible');
  const SERVICE_REQUEST_ADD_PHOTOS_BUTTON = cy.get(`#request-add-photos-button`);
  SERVICE_REQUEST_ADD_PHOTOS_BUTTON.should('be.visible');
  const SERVICE_REQUEST_PRINT_LABELS_BUTTON = cy.get(`#request-print-labels-button`);
  SERVICE_REQUEST_PRINT_LABELS_BUTTON.should('be.visible');
}

export async function linkVisualFeedbackToServiceRequest() {
  const SERVICE_REQUEST_ADD_VISUAL_FEEDBACK_BUTTON = cy.get(`#request-add-visual-feedback-button`);
  SERVICE_REQUEST_ADD_VISUAL_FEEDBACK_BUTTON.click();
  cy.wait(2000);
}

export async function confirmVisualFeedbackSubmission() {
  const SERVICE_REQUEST_VISUAL_FEEDBACK_BUTTON = cy.get(`#request-visual-feedback-button`);
  SERVICE_REQUEST_VISUAL_FEEDBACK_BUTTON.should('be.visible');
}

export async function confirmSprayoutMeasurementSubmission() {
  const SERVICE_REQUEST_SPRAYOUT_MEASUREMENT_BUTTON = cy.get(`#request-sprayout-measurement-button`);
  SERVICE_REQUEST_SPRAYOUT_MEASUREMENT_BUTTON.should('be.visible');
}

export async function linkSprayoutMeasurementToServiceRequest() {
  const SERVICE_REQUEST_ADD_SPRAYOUT_MEASUREMENT_BUTTON = cy.get(`#request-add-sprayout-measurement-button`);
  SERVICE_REQUEST_ADD_SPRAYOUT_MEASUREMENT_BUTTON.click();
  cy.wait(2000);
}
