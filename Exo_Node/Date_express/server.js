var express = require('express');
var app = express();
var d = new Date;

app.get('/service', function (req, res) {
  if (req.query.type == "iso") {
    res.send(d.toISOString());
  } else if (req.query.type == "date") {
    res.send(d.toDateString());
  } else {
    res.send("error 404: page not found");
  }

});

app.listen(1025, function(){
  console.log('listening on *:1025');
});
