const exp=require('express');
const cors = require("cors"); 
const Axios = require("axios"); 
const app=exp()
require('dotenv').config() //process.env.PORT
const mongoClient=require('mongodb').MongoClient;
const path=require('path')
app.use(cors()); 

//deploy react build in this server
app.use(exp.static(path.join(__dirname,'../frontend/build')))
//to parse the body of req
app.use(exp.json())

//connect to DB
mongoClient.connect(process.env.DB_URL)
.then(client=>{
    const blogdb=client.db('webathon')
    const userscollection=blogdb.collection('userscollection')
    app.set('userscollection',userscollection)
    console.log("DB connection success")
})
.catch(err=>console.log("Err in DB connection",err))


const userApp=require('./APIs/user-api')
const adminApp=require('./APIs/admin-api')
const IDEApp=require('./APIs/IDE-api')

app.use('/user-api',userApp)
app.use('/admin-api',adminApp)
app.use('/IDE-api',IDEApp)


app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'../frontend/build/index.html'))
})

//express error handler
app.use((err,req,res,next)=>{
    res.send({message:"error",payload:err.message})
})

const port=process.env.PORT || 6000;
app.listen(port,()=>console.log(`Web server on port ${port}`))





