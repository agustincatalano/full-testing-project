import asd from "../../data/database.json";
const myUserName = asd.users[1].username;

const usernameSelector = "#username";
const passwordSelector = "#password";
const signInButtonSelector = "button:contains('Sign In')";
const userFullNameSelector = "[data-test='sidenav-user-full-name']";

beforeEach(() => {
  cy.visit("/");
});

describe("Log In", () => {
  it('returns "fizz" when number is multiple of 3', () => {
    cy.get(usernameSelector).type(myUserName);
    cy.get(passwordSelector).type("test1234");
    cy.get(signInButtonSelector).click();
    cy.get(userFullNameSelector).contains("Agustin C");
  });
});
