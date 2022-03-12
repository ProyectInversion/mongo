var express = require('express'),
    app = express(),
    cors = require('cors'),
    routes = require('./Routes/routes');

require('./Connection/conn_sql');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

app.use('/cliente-mongo',routes)

var port = process.env.PORT || 2100;

app.listen(port,(err) => 
    {
        if (err) throw err;
        console.log('conectado al puerto: ',port)
    }
);
