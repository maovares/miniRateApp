'use strict'

//var host = "localhost";
//var port = 27017;
var dbName = "ratesMenu";

//
var mongojs = require("mongojs");
var db = mongojs(dbName,['rates']);

exports.getRateData = function(callback){
  db.rates.find(function(error, docs){
    callback(error,docs);
  });
};

exports.postRateData = function(date, rate){
  db.rates.insert({
    date : date,
    rate : rate
  });
};
