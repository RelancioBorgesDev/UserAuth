describe("Home page redirect", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should redirect to signUp page", () => {
    cy.get('a[href^="/auth/sign-up"]').click();
  });

  it("should redirect to signIn page", () => {
    cy.get('a[href^="/auth/sign-in"]').click();
  });
});
