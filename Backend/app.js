const express=require('express')
const mongoose=require('mongoose');
//const router = require('../routes/book-routes');
const router=require("./routes/Book-routes")
mongoose.connect("mongodb://127.0.0.1:27017/book-store");
const app=express();
const cors=require('cors')

//mddlewares
app.use(express.json())
app.use(cors())

app.use('/books',router)

app.listen(5000)
