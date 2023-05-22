import express from 'express';
const app = express()
const port = process.env.PORT || '3000'
import connectDB from './db/connectdb.js';
import web from './routes/web.js'

//URL for MongoDB Connection
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"



//Calling Databse connectdb and passing DATABAS_URL
connectDB(DATABASE_URL)

//urlencoded middleware for
app.use(express.urlencoded({extended:false}))

//view EJS engine 
app.set('view engine', 'ejs')

//Middleware for static files like CSS, JS, Images etc
app.use(express.static("public"))

//Load route
app.use('/student', web)

//Server connection and information
app.listen(port, () =>{
    console.log(`Server is listening at http://localhost:${port}`)
})