import database from "../../data/database.json";
const myUserName = database.users[1].username;

const usernameSelector = "#username";
const passwordSelector = "#password";
const signInButtonSelector = "button:contains('Sign In')";
const userFullNameSelector = "[data-test='sidenav-user-full-name']";

const accountName = "Agustin C";
const password = "test1234";

beforeEach(() => {
  cy.visit("/");
});

describe("Log In", () => {
  it("Log In", () => {
    cy.get("div > svg")
      .should("have.attr", "width", "235px")
      .should("have.attr", "height", "28px");
    cy.get(usernameSelector).type(myUserName);
    cy.get(signInButtonSelector).should("be.disabled");
    cy.get(passwordSelector).type(password);
    cy.get(signInButtonSelector).should("be.enabled");
    cy.get(signInButtonSelector).click();
    cy.get(userFullNameSelector).contains(accountName);
  });
});
