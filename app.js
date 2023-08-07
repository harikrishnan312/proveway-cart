const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
