// pages/signupPage.js
class SignUpPage {
  constructor(page) {
    this.page = page;
  }

  async signUp(username, password) {
    await this.page.fill('#sign-username', username);
    await this.page.fill('#sign-password', password);
    await this.page.click('button:has-text("Sign up")');

    // Esperar a que aparezca el pop-up de éxito o error
    this.page.on('dialog', async (dialog) => {
      console.log('Dialog message:', dialog.message()); // Imprimir el mensaje del pop-up
      await dialog.accept(); // Aceptar el pop-up para cerrarlo
    });

    // Esperar un breve momento para dar tiempo al pop-up para que aparezca
    await this.page.waitForTimeout(2000); // Espera 2 segundos

    // Aquí puedes agregar una verificación adicional si es necesario
    // Por ejemplo, puedes verificar si el nombre de usuario ya existe o si hay un error
    const errorVisible = await this.page.isVisible('.alert-danger'); // Cambia esto según la clase del mensaje de error
    if (errorVisible) {
      const errorMessage = await this.page.locator('.alert-danger').textContent();
      console.log('Error message:', errorMessage);
    }
  }
}

module.exports = SignUpPage;
