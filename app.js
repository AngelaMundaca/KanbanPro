const express = require('express');
const path = require('path');
const app = express();

const apiRoutes = require('./src/routes/apiRoutes');
const apiAuthRoutes = require('./src/routes/apiAuthRoutes');
const viewRoutes = require('./src/routes/viewRoutes');

// configurar handlebars 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas públicas
app.use('/api/auth', apiAuthRoutes);

// rutas protegidas
app.use('/api', apiRoutes);

// vistas
app.use('/', viewRoutes);

// iniciar servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});