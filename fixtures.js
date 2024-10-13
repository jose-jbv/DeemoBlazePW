// fixtures.js
const { test } = require('@playwright/test');
const HomePage = require('./pages/homePage');
const LoginPage = require('./pages/loginPage');
const SignUpPage = require('./pages/signupPage');

test.fixture('pages', async ({ page }, use) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const signUpPage = new SignUpPage(page);
  
  // Pasar los objetos a las pruebas
  await use({ homePage, loginPage, signUpPage });
});
