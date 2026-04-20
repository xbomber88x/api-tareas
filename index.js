const express = require('express');
const tareasRouter = require('./routes');

const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// Rutas
app.use('/tareas', tareasRouter);

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});