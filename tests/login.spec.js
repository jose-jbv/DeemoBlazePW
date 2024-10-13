// tests/login.spec.js
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const { test, expect } = require('@playwright/test'); // Importar desde '@playwright/test'
const HomePage = require('../pages/homePage'); // Asegúrate de que la ruta sea correcta
const LoginPage = require('../pages/loginPage'); // Asegúrate de que la ruta sea correcta

// Leer el nombre de usuario y la contraseña desde el archivo .env
const testUser = {
  username: process.env.TEST_USER,
  password: process.env.TEST_PASSWORD,
};

test.describe('Login Functionality', () => {
  test('should log in with existing user', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await page.goto('/'); // Usar baseURL automáticamente
    await homePage.goToLoginPage();
    await loginPage.login(testUser.username, testUser.password);

    // Aserciones necesarias después del inicio de sesión
    // await expect(page.locator('.alert-success')).toBeVisible(); // Asegúrate de que la clase sea correcta
  });
});
