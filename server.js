const express = require('express')
const mongoose = require('mongoose');
const app = express();
const data = require("./models/data")
app.use(express.json());
const dbURI = 'mongodb+srv://uche:Program1000@cluster0.hia6b.mongodb.net/Nativescript?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
    .then  (result =>{
            console.log("Connected to db")
    }).catch(err =>{
        console.log(err)
    })

    app.get("/getAll", (req, res) => {
        data.find().then(result => {
            res.send(result)
        }).catch(err=>{
            res.send(err);
        })
    })

    app.post("/insert", (req,res) =>{
        data.insertMany([{
            subject: "Mathematics",
            location: "France",
            price: 300,
            inventory: 12,
            
        },
        {
            subject: "Geography",
            location: "Mauritius",
            price: 300,
            inventory: 10,
            
        },
        {
            subject: "Music",
            location: "St-Julian",
            price: 1230,
            inventory: 10,
            
        },
        {
            subject: "Sociology",
            location: "Lekki",
            price: 123,
            inventory: 13,
            
        },
        {
            subject: "Theater Art",
            location: "Cambridge",
            price: 200,
            inventory: 10,
            
        },
        {
            subject: "Geography",
            location: "Havard",
            price: 90,
            inventory: 10,
            
        }
    ]).then(result=>{
        res.send(result)
    }).catch(err=>{
        res.send(err)
    })
    })

app.listen(2500, ()=>{
    console.log("App running on port 2500");
})

