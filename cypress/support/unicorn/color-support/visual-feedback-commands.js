
export async function rateSprayoutFiveStars() {
  const GENERAL_RATING_HEADER = cy.get(`#general-rating-header`);
  GENERAL_RATING_HEADER.should('be.visible');
  const FIVE_STAR_RATING = cy.get(`span.fa-star:nth-child(1)`);
  FIVE_STAR_RATING.click();
  cy.wait(2000);
  const THANK_YOU_FOR_YOUR_FEEDBACK_CONFIMRATION = cy.get(`#thank-you-for-your-feedback-confirmation`);
  THANK_YOU_FOR_YOUR_FEEDBACK_CONFIMRATION.should('be.visible');
}

export async function rateSprayoutFourStars() {
  const FOUR_STAR_RATING = cy.get(`span.fa-star:nth-child(2)`);
  FOUR_STAR_RATING.click();
  cy.wait(2000);
  const WHAT_COULD_HAVE_BEEN_BETTER_HEADER = cy.get(`#what-could-have-been-better-header`);
  WHAT_COULD_HAVE_BEEN_BETTER_HEADER.should('be.visible');
  const TEXTURE_SELECTION_BUTTON = cy.get(`[aria-label="Texture/Effect"] > .ui-button-text`);
  TEXTURE_SELECTION_BUTTON.click();
  cy.wait(2000);
  const DIRECTION_SPRAYOUT_IS_HEADER = cy.get(`#direction-sprayout-is-header`);
  DIRECTION_SPRAYOUT_IS_HEADER.should('be.visible');
  const FEEDBACK_COMMENT_HEADER = cy.get(`#feedback-comment-header`);
  FEEDBACK_COMMENT_HEADER.should('be.visible');
  const LESS_SPARKLY_BUTTON = cy.get(`[aria-label="more sparkly"]`);
  LESS_SPARKLY_BUTTON.click();
  cy.wait(2000);
  const VISUAL_FEEDBACK_SUBMISSION_BUTTON = cy.get(`#visual-feedback-submission-button`);
  VISUAL_FEEDBACK_SUBMISSION_BUTTON.should('be.visible');
  VISUAL_FEEDBACK_SUBMISSION_BUTTON.click();
  cy.wait(2000);
}
