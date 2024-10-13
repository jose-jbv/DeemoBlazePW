// tests/signup.spec.js
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const { test, expect } = require('@playwright/test'); // Importar desde '@playwright/test'
const HomePage = require('../pages/homePage'); // Asegúrate de que la ruta sea correcta
const SignUpPage = require('../pages/signupPage');
const { generateAndSaveUsername } = require('../utils/userUtil'); // Importar la función de utilidad

const testUser = {
  username: generateAndSaveUsername(), // Generar y guardar el nombre de usuario
  password: process.env.TEST_PASSWORD,
};

test.describe('Sign Up Functionality', () => {
  test('should sign up a new user', async ({ page }) => {
    const homePage = new HomePage(page);
    const signUpPage = new SignUpPage(page);

    await page.goto('/'); // Usar baseURL automáticamente
    await homePage.goToSignUpPage();
    await signUpPage.signUp(testUser.username, testUser.password);

    // Aserciones necesarias después del registro
    // await expect(page.locator('.alert-success')).toBeVisible(); // Asegúrate de que la clase sea correcta
  });
});