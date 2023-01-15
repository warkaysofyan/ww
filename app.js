const express = require('express');
let morgan = require('morgan');
let app = express();
app.use(morgan('dev'));

let port = process.env.PORT || 5000;

app.use('/', (t, res) => {
    console.log(t.ips);
    res.send('no datat');
});

app.listen(port, () => {
    console.log('app startin on port ' + port);
});
