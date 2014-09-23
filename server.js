var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);

app.use(express.static(__dirname+'/assets'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/todos', function(req, res){
    var todos = [
      {id:1, description: 'First item', status: 'complete' },
      {id:2, description: 'Second item', status: 'complete' },
      {id:3, description: 'Third item', status: 'complete' },
      {id:4, description: 'Fourth item', status: 'incomplete' },
      {id:5, description: 'Fifth item', status: 'complete' },
      {id:6, description: 'Sixth item', status: 'incomplete' },
   ];
   res.status(200).json(todos);
});

app.put('/todos/:id', function(req, res){
    // No data saving, just response
    res.status(200).json(req.params.id);
});

app.listen(3000);