class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goToLoginPage() {
    await this.page.waitForSelector('a:has-text("Log in")');
    await this.page.click('a:has-text("Log in")');
  }

  async goToSignUpPage() {
    await this.page.waitForSelector('a:has-text("Sign up")');
    await this.page.click('a:has-text("Sign up")');
  }

  async selectProduct(productName) {
    await this.page.waitForSelector(`a:has-text("${productName}")`);
    await this.page.click(`a:has-text("${productName}")`);
  }

  async addToCart() {
    await this.page.waitForSelector('a:has-text("Add to cart")');
    await this.page.click('a:has-text("Add to cart")');
  }

  async goToCart() {
    await this.page.waitForSelector('a:has-text("Cart")');
    await this.page.click('a:has-text("Cart")');
  }
}

module.exports = HomePage;