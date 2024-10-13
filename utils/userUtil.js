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
          console.error('Error al escribir en el archivo .env:', err);
        } else {
          console.log('Variable TEST_USER actualizada en el archivo .env');
        }
      });
    } else {
      // Añadir la nueva variable al final del archivo .env
      fs.appendFile(envFilePath, newEnvVariable, (err) => {
        if (err) {
          console.error('Error al añadir en el archivo .env:', err);
        } else {
          console.log('Variable TEST_USER añadida en el archivo .env');
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
