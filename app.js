const express = require('express');
let morgan = require('morgan');
let app = express();
app.use(morgan('dev'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
let port = process.env.PORT || 5000;

// ! implemanting routes :
let lPage = require('./routes/users/lanPage');

app.use('/', lPage);

app.listen(port, () => {
    console.log('app startin on port ' + port);
});
