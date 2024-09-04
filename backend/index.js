const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Manejar todas las rutas no definidas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'descriptivos.html'), (err) => {
    if (err) {
      res.status(500).send('Error al cargar el archivo.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
