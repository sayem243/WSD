import { loginLocalUser } from "cypress/support/unicorn/color-support/menu-tiles-commands.js";
import { selectRepairJob, goToSprayoutAssistancePath } from "cypress/support/unicorn/color-support/repair-job-commands.js";
import { selectSprayoutMeasurement } from "cypress/support/unicorn/color-support/sprayout-measurement-commands.js";
import { rateSprayoutFourStars } from "cypress/support/unicorn/color-support/visual-feedback-commands.js";
import {
  goToSelectedAdjustmentMix,
  goToSelectedAdjustmentSatisfaction,
  giveThumbsUpRatingForSatisfiedSolutionAdjustment,
  confirmSatisfiedSolutionAdjustmentIsSaved,
  giveThumbsDownRatingForSatisfiedSolutionAdjustment,
} from "cypress/support/unicorn/color-support/solution-adjustment-commands.js";
import {
  verifySelectedRepairJobIsLinkedToServiceRequest,
  confirmVisualFeedbackSubmission,
  confirmSprayoutMeasurementSubmission
} from "cypress/support/unicorn/color-support/service-request-commands.js";

describe('A painter should be able to', () => {

  it('select an adjusted solution, take it to mix, give it a thumbs down satisfaction rating, and confirm service request submission', () => {
    loginLocalUser();
    goToSprayoutAssistancePath();
    selectRepairJob();
    selectSprayoutMeasurement();
    rateSprayoutFourStars();
    goToSelectedAdjustmentMix();
    goToSelectedAdjustmentSatisfaction();
    giveThumbsDownRatingForSatisfiedSolutionAdjustment();
    verifySelectedRepairJobIsLinkedToServiceRequest();
    confirmSprayoutMeasurementSubmission()
    confirmVisualFeedbackSubmission();
  });

  it('select an adjusted solution, take it to mix, give it a thumbs up satisfaction rating, and confirm the satisfied solution adjustment is saved', () => {
    loginLocalUser();
    goToSprayoutAssistancePath();
    selectRepairJob();
    selectSprayoutMeasurement();
    rateSprayoutFourStars();
    goToSelectedAdjustmentMix();
    goToSelectedAdjustmentSatisfaction();
    giveThumbsUpRatingForSatisfiedSolutionAdjustment();
    confirmSatisfiedSolutionAdjustmentIsSaved();
  });

})