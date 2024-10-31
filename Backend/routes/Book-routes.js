const express=require('express')
const router=express.Router()
const Book=require('../models/book')
const booksController = require('../Controller/Books-controler')


router.get("/",booksController.getAllbooks)
router.post('/',booksController.addBook)
router.get("/:id",booksController.getById)
router.put('/:id',booksController.updateBook)
router.delete("/:id",booksController.deleteBook)
module.exports = router