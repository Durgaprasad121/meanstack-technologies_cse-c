var express=require('express');
var data=express();
data.get('/',function(req,res){
	res.send('hello welcome to lbrce');
});
data.get('/cse',function(req,res){
	res.send('hello welcome to cse');
});
data.get('/it',function(req,res){
	res.send('hello welcome to it');
});
data.get('/aids',function(req,res){
	res.send('hello welcome to AIDS');
});
data.get('/ece',function(req,res){
	res.send('hello welcome to ece');
});
data.get('/eee',function(req,res){
	res.send('hello welcome to eee');
});
data.get('/mech',function(req,res){
	res.send('hello welcome to MECH');
});
data.get('/ase',function(req,res){
	res.send('hello welcome to ase');
});
console.log('Listen the server 3210......');
var server=data.listen(3210);