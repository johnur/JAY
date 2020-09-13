const fetch = require("node-fetch");
var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
const { json } = require("body-parser");
var request = require('request');




/* GET users listing. */
router.get("/", function(req, res, next)  {
 
  request({
     uri: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&outputsize=full&datatype=json&apikey=L0L4DTNSJZGG2DUV',
     
 }).pipe(res);


});

  

module.exports = router;
