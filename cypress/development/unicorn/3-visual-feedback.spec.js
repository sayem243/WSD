import { loginLocalUser } from "cypress/support/unicorn/color-support/menu-tiles-commands.js";
import { selectRepairJob, goToSprayoutAssistancePath } from "cypress/support/unicorn/color-support/repair-job-commands.js";
import { selectSprayoutMeasurement } from "cypress/support/unicorn/color-support/sprayout-measurement-commands.js";
import { rateSprayoutFiveStars, rateSprayoutFourStars } from "cypress/support/unicorn/color-support/visual-feedback-commands.js";

describe('A painter should be able to', () => {

  it('rate a spray out and if less than five stars, provide improvement, direction, and comment input', () => {
    loginLocalUser();
    goToSprayoutAssistancePath();
    selectRepairJob();
    selectSprayoutMeasurement();
    rateSprayoutFiveStars();
    rateSprayoutFourStars();
  });

});