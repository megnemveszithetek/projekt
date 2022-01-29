const express =require('express')
const cors=require('cors');
const mysql=require('mysql');
const app = express()
const conn=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"fitnesapp"
    
    });

app.get('/', (req, res) =>{
     res.render('index.js')
})

app.listen(3000,() =>{
    console.log('A server fut')
})
