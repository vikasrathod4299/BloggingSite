const express = require('express');
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

const blogsRoute = require('./routes/blogs.routes')

app.use('/blogs',blogsRoute)

app.listen(3000,  ()=> console.log("Alive on port 3000"))