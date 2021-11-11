describe('User visiting the appliction url', () => {
  it("is expected to see a header", () => {
    cy.visit("/");
    cy.get("h1").should("contain.text","Adress Book")
    })
  })
