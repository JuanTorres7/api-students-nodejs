const sqlite3 = require('sqlite3').verbose();

// Crear la base de datos en memoria
const db = new sqlite3.Database('./db.sqlite3', (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Database opened');
    // Crear una tabla de usuarios
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE
    )`);
  }
});

module.exports = db;
