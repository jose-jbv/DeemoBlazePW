require('dotenv').config(); 
const { test, expect } = require('@playwright/test'); 
const HomePage = require('../pages/homePage'); 
const LoginPage = require('../pages/loginPage'); 

// Read data for User & Pwd from .env file
const testUser = {
  username: process.env.TEST_USER,
  password: process.env.TEST_PASSWORD,
};

test.describe('Login Functionality', () => {
  test('should log in with existing user', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await page.goto('/');
    await homePage.goToLoginPage();
    await loginPage.login(testUser.username, testUser.password);

  });
});
