const express = require('express')
const request = require('request')
const app = express()
var async = require('asyncawait/async')
var await = require('asyncawait/await')

// Add headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', async (function (req, res) {
    res.json(await (trx()));
}));

app.listen(4000);

trxValue = 0;
count = 0

function trx(){
    return new Promise((resolve, reject) => {
        request('https://www.binance.com/api/v1/ticker/24hr?symbol=TRXBTC', (error, response, body) => {
            resolve({
                value: JSON.parse(body).lastPrice
            }); 
        });
    });
};
 