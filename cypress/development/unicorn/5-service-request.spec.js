import { loginLocalUser } from "cypress/support/unicorn/color-support/menu-tiles-commands.js";
import { selectRepairJob } from "cypress/support/unicorn/color-support/repair-job-commands.js";
import { selectSprayoutMeasurement } from "cypress/support/unicorn/color-support/sprayout-measurement-commands.js";
import {
  goToSubmitServiceRequestPath,
  verifySelectedRepairJobIsLinkedToServiceRequest,
  linkVisualFeedbackToServiceRequest,
  linkSprayoutMeasurementToServiceRequest,
  confirmVisualFeedbackSubmission,
  confirmSprayoutMeasurementSubmission
} from "cypress/support/unicorn/color-support/service-request-commands.js";
import { rateSprayoutFourStars } from "cypress/support/unicorn/color-support/visual-feedback-commands.js";

describe('A painter should be able to', () => {

  it('link a repair order job, reference sprayout measurement, and visual feedback to a service request', () => {
    loginLocalUser();
    goToSubmitServiceRequestPath();
    selectRepairJob();
    verifySelectedRepairJobIsLinkedToServiceRequest();
    linkVisualFeedbackToServiceRequest();
    rateSprayoutFourStars();
    linkSprayoutMeasurementToServiceRequest();
    selectSprayoutMeasurement();
    confirmSprayoutMeasurementSubmission();
    confirmVisualFeedbackSubmission();
  });

  it('link a repair order job, visual feedback to a service request, and reference sprayout measurement', () => {
    loginLocalUser();
    goToSubmitServiceRequestPath();
    selectRepairJob();
    verifySelectedRepairJobIsLinkedToServiceRequest();
    linkSprayoutMeasurementToServiceRequest();
    selectSprayoutMeasurement();
    linkVisualFeedbackToServiceRequest();
    rateSprayoutFourStars();
    confirmVisualFeedbackSubmission();
    confirmSprayoutMeasurementSubmission();
  });
});