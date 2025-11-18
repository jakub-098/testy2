// put first tests here
describe("basic tests", () => {

  it("open homepage",() => {
    cy.visit("/");
  })
  
  it("shows album",() => {
    cy.visit("/");
    cy.get('[data-cy="album-card"]').should("be.visible");
  })

  it("shows album detail button",() => {
    cy.visit("/");
    cy.get('[data-cy="album-button"]').should("be.visible");
  })

  it("opens album detail page",() => {
    cy.visit("/");
    cy.get('[data-cy="album-button"]').first().click();
    cy.url().should("include","/album/1");
  })

  it("opens album detail page",() => {
    cy.visit("/");
    cy.get('[data-cy="album-button"]').first().click();
    cy.url().should("include","/album/1");
  })

  it("opens home page when spotify clicked",() => {
    cy.visit("/");
    cy.get('[data-cy="logo"]').click();
    cy.url().should("include","/localhost:3000");
  })

  it("opens home page when spotify clicked",() => {
    cy.visit("/");
    cy.get('[data-cy="album-button"]').first().click();
    cy.get('[data-cy="author-button"]').click();
    cy.url().should("include","/author/21");
  })
})