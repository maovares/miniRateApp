/*

*/

'use strict'

  //
  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');
  var port = 6060;
  //
  var db = require('./logic/db.js');
  //

  app.use(express.static(__dirname + '/public'));
  app.use('/styles', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
  app.use('/images',  express.static(__dirname + '/images/'));
  app.use('/scripts',  express.static(__dirname + '/node_modules/bootstrap/dist/js/'));
  app.use('/scripts',  express.static(__dirname + '/node_modules/angular/'));
  app.use('/scripts',  express.static(__dirname + '/node_modules/angular-ui-bootstrap/dist/'));
  app.use('/scripts',  express.static(__dirname + '/node_modules/angular-ui-router/release/'));
  app.use(bodyParser.urlencoded({'extended':'true'}));
  app.use(bodyParser.json());
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

  //
  app.get('/getRateData/',function(req, res){
    db.getRateData(function(err,docs){
      res.json(docs);
    });

  });

  app.post('/postRateData', function(req, res){
    var date = req.body.date;
    var rate = req.body.rate;
    console.log(date +" "+rate);
    db.postRateData(date, rate);
    res.send("no joda");
  });


  //

  app.listen(port);
  console.log('App listening on port ' + port);
