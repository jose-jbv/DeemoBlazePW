class ProductPage {
    constructor(page) {
      this.page = page;
      this.addToCartButton = this.page.locator('a:has-text("Add to cart")');
      this.cartLink = this.page.locator('#cartur'); // Link to navigate to the cart
    }
  
    async addProductToCart() {
      await this.addToCartButton.click();
      await this.page.on('dialog', async dialog => {
        await dialog.accept(); // Accept the alert
      });
    }
  
    async goToCart() {
      await this.cartLink.click();
    }
  }
  
  module.exports = ProductPage;
  