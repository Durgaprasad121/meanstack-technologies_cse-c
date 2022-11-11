const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/cse_c",(err)=>{
if(err)
console.log("DB Not Connected");
else
console.log("DB connected"); 
});
 const ns=new mongoose.Schema({
name:String,
age:Number
});
const nm=new mongoose.model("records",ns);
nm.insertMany([{name:'Gopal',age:20},{name:'ravi',age:30},{name:'balu',age:52}]).then(function(){
console.log("Data inserted")}).catch(function(error){console.log(error)});