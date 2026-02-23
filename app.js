const express = require('express');
const path = require('path');
const hbs = require('hbs');
const kanbanRoutes = require('./src/routes/kanbanRoutes');
const logger = require('./src/middlewares/logMiddleware');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));
hbs.registerPartials(path.join(__dirname, 'src/views/partials'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger);

app.use('/', kanbanRoutes);

app.listen(3000, () => console.log('KanbanPro en http://localhost:3000'));