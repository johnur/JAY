
const fetch = require("node-fetch");
var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
const { json } = require("body-parser");


// const alpha = require('alphavantage')({ key: 'L0L4DTNSJZGG2DUV' });

    var request = require('request');
// const { default: Axios } = require("axios");

//     alpha.data.intraday(`msft`).then(data => {
//         console.log(data);
//       });

var getData = request({
    uri: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=compact&datatype=json&apikey=L0L4DTNSJZGG2DUV', 
    
    })
    


router.get("/", function(req, res, next)  {
 
     request({
        uri: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=compact&datatype=json&apikey=L0L4DTNSJZGG2DUV',
        
    }).pipe(res);


});


module.exports = router; 