describe("User visiting the appliction url", () => {
  // create some fake data. remember that this string needs to be parsable (using'JSON.parse()')

  const entries = '[{"name": "John Doe", "phone": "031-121212", "twitter":"@john_doe"}, {"name": "Jane Doe", "phone": "+1 202-121212", "twitter":"@jane_doe"}]';

  beforeEach(() => {
    cy.visit("/", {
      onBeforeload(window) {
        window.localStorage.setItem('entrise', '...the data need to store')
      }
    })
  })
  cy.get('[name=address_list] ul').as('displayList')

});

it("is expected to see a header", () => {
  cy.get("h1").should("contain.text", "Adress Book")
});

it('is expected to see an address list', () => {
  cy.get('@displayList').should('exist').and('be.visible')
});

it('is expected to display 2 entries', () => {
  cy.get('@displayList').children().should('have.length', 2)
});


describe('adding an entry by submitting a form', () => {

  beforeEach(() => {
    cy.get('[name=name]').type('Jill Doe')
    cy.get('[name=phone]').type('0700-121212')
    cy.get('[name=twitter]').type('@jill_doe')
    cy.get('[name=submit]').click()
  });

  it('is expected to display 3 entries', () => {
    cy.get('@displayList').children().should('have.length', 3)
  });

  it('is expected to display the new entry', () => {
    cy.get('@displayList').should('contain.text', 'Jill Doe')
  });
});