require('dotenv').config(); // Load .env variables
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage'); 
const SignUpPage = require('../pages/signupPage');
const { generateAndSaveUsername } = require('../utils/userUtil'); 

const testUser = {
  username: generateAndSaveUsername(),
  password: process.env.TEST_PASSWORD,
};

test.describe('Sign Up Functionality', () => {
  test('should sign up a new user', async ({ page }) => {
    const homePage = new HomePage(page);
    const signUpPage = new SignUpPage(page);

    await page.goto('/');
    await homePage.goToSignUpPage();
    await signUpPage.signUp(testUser.username, testUser.password);
  });
});