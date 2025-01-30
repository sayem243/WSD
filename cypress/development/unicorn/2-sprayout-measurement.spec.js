import { loginLocalUser } from "cypress/support/unicorn/color-support/menu-tiles-commands.js";
import { selectRepairJob, goToSprayoutAssistancePath } from "cypress/support/unicorn/color-support/repair-job-commands.js";
import { selectSprayoutMeasurement } from "cypress/support/unicorn/color-support/sprayout-measurement-commands.js";

describe('A painter should be able to', () => {

  it('load spectro data from the database', () => {
    loginLocalUser();
    goToSprayoutAssistancePath();
    selectRepairJob();
    selectSprayoutMeasurement();
  });

});