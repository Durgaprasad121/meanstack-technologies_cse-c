
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
const old={name:'ravi'};
const new1={age: 28};
let doc=nm.findOneAndUpdate(old,new1,(err)=>{
if(err){
console.log(err);
}
else{
console.log("updated");
}
});