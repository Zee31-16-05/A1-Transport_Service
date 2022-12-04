const express = require('express')
const mongoose = require('mongoose')
const chalk = require('chalk')
const app = express()
const PORT = 7070;
const hostname = 'localhost';
const DriverRoute = require('./routes/Driver.route')

app.use(express.json())



app.use('/driver',DriverRoute)

mongoose.connect('mongodb://0.0.0.0:27017/a1-transport',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log(chalk.white.bgGreen.bold("Successfully Connected to Database")))
.catch(()=>console.log(chalk.white.bgRed.bold("Error Connecting to Database")))

app.listen(PORT,()=>{
    console.log(chalk.white.bgBlue.bold(`listening on ${hostname}: ${PORT}`))
})