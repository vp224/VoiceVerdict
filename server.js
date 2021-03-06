//Importing modules
var express=require('express');
var bodyParser=require('body-parser');
var morgan=require('morgan');
var config=require('./config');

var app=express();

//MiddleWare
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//Routes
app.get('/hello',function(req,res){
	res.sendFile(__dirname +'/public/views/index.html');
});
//Setting Http port
app.listen(config.port,function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log('Starting Express Server');
	}
});