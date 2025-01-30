import { loginLocalUser } from "cypress/support/unicorn/color-support/menu-tiles-commands.js";
import { goToRequestOverviewPath } from "cypress/support/unicorn/color-support/request-overview-commands.js";

describe('A painter should be able to', () => {

  it('view an overview of in progress and completed service requests', () => {
    loginLocalUser();
    goToRequestOverviewPath();
  });
});