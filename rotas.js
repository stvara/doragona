var express = require('express');
var app = express();

app.use('/estatico', express.static('/home/samuel/sites/doragona/www'))
app.get('/',function(req,res){
    res.sendFile('/home/samuel/sites/doragona/www/html/');

});
app.get('/css',function(req,res){
    res.sendFile('/home/samuel/sites/doragona/www/css/style.css');
});
app.get('/script',function(req,res){
    res.sendFile('/home/samuel/sites/doragona/www/script/script.js');
});

app.listen(3000,'127.0.0.1')
    console.log('rodando na porta 3000');


//