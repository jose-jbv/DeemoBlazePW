require('dotenv').config();
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const CartPage = require('../pages/cartPage');

test.describe('Add Product to Cart', () => {
  test('should add a product to the cart successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    await page.goto('/');
    await homePage.selectProduct('Samsung galaxy s6');
    page.on('dialog', dialog => dialog.accept());
    await homePage.addToCart();
    await page.waitForTimeout(1000);
    await homePage.goToCart();
    await cartPage.waitForCartToLoad();
    await expect(cartPage.productLocator('Samsung galaxy s6')).toBeVisible();
  });
});