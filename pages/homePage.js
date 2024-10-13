const BasePage = require('./basePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.loginLink = 'a#login2';
    this.signupLink = 'a#signin2';
  }

  async goToLoginPage() {
    await this.page.click(this.loginLink);
  }

  async goToSignUpPage() {
    await this.page.click(this.signupLink);
  }
}

module.exports = HomePage;
