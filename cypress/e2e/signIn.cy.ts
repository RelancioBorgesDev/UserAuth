import LoginForm from "../../src/app/auth/(auth)/sign-in/components/login-form/login-form";
describe("sign in page test", () => {
  beforeEach(() => {
    cy.visit("/auth/sign-in");
  });
  it("should redirect to sign up page", () => {
    cy.get('a[href^="/auth/sign-up"]').click();
  });

  it("should fill the login fields", () => {
    cy.get('input[name="email"]').type("example@email.com");
    cy.get('input[name="password"]').type("password123");
  });

  it("shouldnt let the user complete the login and redirect to the dashboard", () => {
    cy.get('button[type="submit"]').click();
  });

  it("should fill the login fields", () => {
    cy.get('input[name="email"]').type("example@email.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();
    cy.visit("/dashboard");
  });
});
