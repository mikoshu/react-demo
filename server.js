var express = require('express')
var app = express()
var request = require('request')
var data  = require('./data')

app.use(express.static('./'))

app.all('*',function(req,res,next){
	res.json(data)
	//request('./data.js').pipe(res)
})

app.listen(3000)

console.log("server has begin")