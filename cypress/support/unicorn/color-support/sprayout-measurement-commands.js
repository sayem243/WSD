
export async function selectSprayoutMeasurement() {
  const SPRAYOUT_MEASUREMENT_HEADER = cy.get(`#sprayout-measurement-header`);
  SPRAYOUT_MEASUREMENT_HEADER.should('be.visible');
  const MEASUREMENT_CELL = cy.get(`.ui-table-tbody > :nth-child(1) > :nth-child(2)`);
  MEASUREMENT_CELL.click();
  cy.wait(2000);
}
