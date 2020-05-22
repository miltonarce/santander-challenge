describe("meetups app", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("login.json").as("loginUser");
  });

  it("visit home", () => {});

  it("do login admin", () => {
    cy.visit("/auth");
    cy.get("@loginUser").then(({ user, password }) => {
      cy.get("#basic_username").type(user);
      cy.get("#basic_password").type(password, { log: false });
      cy.url().should("include", "/");
    });
  });
});
