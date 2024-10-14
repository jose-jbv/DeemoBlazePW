class CartPage {
  constructor(page) {
    this.page = page;
  }

  async waitForCartToLoad() {
    await this.page.waitForSelector('.success');
  }

  productLocator(productName) {
    return this.page.locator(`.success:has-text("${productName}")`);
  }
}

module.exports = CartPage;