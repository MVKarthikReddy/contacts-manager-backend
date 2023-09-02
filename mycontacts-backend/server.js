
const express = require('express');
const errorhandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000;

connectDb()
const app = express()

app.use(express.json())
app.use("/api/contacts/",require('./routes/contactRoute'))
app.use("/api/users/",require('./routes/userRoute'))

app.use(errorhandler)

app.listen(port,() => 
{
    console.log(`sever running on port ${port}`)
})