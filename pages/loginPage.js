const BasePage = require('./basePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameField = 'input#loginusername';
    this.passwordField = 'input#loginpassword';
    this.loginButton = 'button[onclick="logIn()"]';
  }

  async login(username, password) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }
}

module.exports = LoginPage;
