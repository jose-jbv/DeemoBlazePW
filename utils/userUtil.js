// utils/userUtil.js
const { faker } = require('@faker-js/faker'); // Importar faker
const fs = require('fs'); // Módulo para manejar archivos

const envFilePath = './.env'; // Ruta al archivo .env

// Función para generar un nombre de usuario aleatorio
function generateUsername() {
  return faker.internet.userName();
}

// Función para actualizar el archivo .env
function updateEnvFile(username) {
  const newEnvVariable = `TEST_USER=${username}\n`;
  
  fs.readFile(envFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo .env:', err);
      return;
    }

    if (data.includes('TEST_USER=')) {
      // Reemplazar la variable existente
      const updatedData = data.replace(/TEST_USER=.*/g, newEnvVariable.trim());
      fs.writeFile(envFilePath, updatedData, (err) => {
        if (err) {
          console.error('Error writting in .env file:', err);
        } else {
          console.log('Updating TEST_USER in .env');
        }
      });
    } else {
      // Añadir la nueva variable al final del archivo .env
      fs.appendFile(envFilePath, newEnvVariable, (err) => {
        if (err) {
          console.error('Error adding in .env file:', err);
        } else {
          console.log('TEST_USER variable as been added on .env file.');
        }
      });
    }
  });
}

// Función para generar y guardar el nombre de usuario
function generateAndSaveUsername() {
  const username = generateUsername();
  updateEnvFile(username);
  return username;
}

module.exports = {
  generateAndSaveUsername,
};
