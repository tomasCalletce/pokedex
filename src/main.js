const express = require('express');
const handlebars = require('express-handlebars');
const homeController = require('./controllers/homeController');

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views','./src/views');

app.use(express.static('public'))

app.get('/', homeController.index);

app.get('/all',homeController.all);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

