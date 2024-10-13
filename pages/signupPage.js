// pages/signupPage.js
class SignUpPage {
  constructor(page) {
    this.page = page;
  }

  async signUp(username, password) {
    await this.page.fill('#sign-username', username);
    await this.page.fill('#sign-password', password);
    await this.page.click('button:has-text("Sign up")');
    
    // Wait for pop-up to be visible. 
    this.page.on('dialog', async (dialog) => {
      console.log('Dialog message:', dialog.message()); // Print message in pop-up
      await dialog.accept(); // Accept Pop-up
    });

    // Wait 2 secs. for pop-up to be displayed.
    await this.page.waitForTimeout(2000);

    // Validate if User Exists
    /* commented as each sign up will create a new user
    const errorVisible = await this.page.isVisible('.alert-danger'); // Cambia esto según la clase del mensaje de error
    if (errorVisible) {
      const errorMessage = await this.page.locator('.alert-danger').textContent();
      console.log('Error message:', errorMessage);
    }
    */
  }
}

module.exports = SignUpPage;
