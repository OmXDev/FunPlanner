import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import connectDB from './utils/db.js';
import dotenv from 'dotenv'
import cors from 'cors'
// import userRoute from './routes/user.route.js'
import userRoute from './routes/user.route.js'
import eventRoute from './routes/event.route.js'


dotenv.config({})
const app= express()

app.use(cors({
    origin: 'http://localhost:5174',  // or '*' to allow any origin (for development only)
    credentials: true, // Allow cookies to be sent with the request
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  }));

app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))


const port = process.env.PORT || 4000;

app.use('/api/v1/user',userRoute)
app.use('/api/v1/event',eventRoute)




  app.listen(port,()=>{
    connectDB();
      console.log(`server is running on http://localhost:${port}`)
  })  