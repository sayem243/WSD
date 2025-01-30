import { loginLocalUser } from "cypress/support/unicorn/color-support/menu-tiles-commands.js";
import {
  goToSprayoutAssistancePath,
  selectRepairJob,
  goToRepairOrders,
  createNewRepairOrder
} from "cypress/support/unicorn/color-support/repair-job-commands.js";

describe('A painter should be able to', () => {

  it('create a repair order', () => {
    loginLocalUser();
    goToRepairOrders();
    const REPAIR_ORDER_ID = Math.floor(Math.random() * 100);
    createNewRepairOrder(REPAIR_ORDER_ID);
  });

  it('select a repair order job to link to a color support service request', () => {
    loginLocalUser();
    goToSprayoutAssistancePath();
    selectRepairJob();
  });

});