 const Book=require('../models/book')

 
 const getAllbooks=async(req,resp)=>{
    let books;
    try{
        books=await Book.find();
    }catch(err){
        console.log(err);
    }

    if(!books){
        return resp.status(404).json({message:"No product found"})
    }else{
        return resp.status(200).json({books})
    }
 }

 const getById=async(req,resp)=>{
    const id=req.params.id;
    let book;
    try{
        book=await Book.findById(id);
    }catch (err){
        console.log(err)
    }
    if(!book){
        return resp.status(404).json({message:"No Book found"})
    }else{
        return resp.status(200).json({book})
    }
 }
 
 
const addBook=async (req,resp)=>{
    const {name,author,description,price,available,image}=req.body;
    let book;
    try{
        book=new Book({
            name,
            author,
            description,
            price,
            available,
            image
        })
        await book.save();
    }catch(err){
        console.log(err);
    }
    if(!book){
        return resp.status(500).json({message:"unable to add book"})
    }else{
        return resp.status(201).json({book})
    }
}
    const updateBook=async(req,resp)=>{
        const {name,author,description,price,available,image}=req.body;
        const id =req.params.id;
        let book;
        try{
            book=await Book.findByIdAndUpdate(id,{
                name,
                author,
                description,
                price,
                available,
                image
            })
            book=await book.save()
        }catch(err){
            console.log(err)
        }

        if(!book){
            return resp.status(404).json({message:"unable to update by this ID"})
        }else{
            return resp.status(200).json({book})
        }

    }
const deleteBook=async(req,resp)=>{
    const id =req.params.id;
    let book;
    try{
        book=await Book.findByIdAndRemove(id)
    }catch(err){
        console.log(err);
    }
    if(!book){
        return resp.status(404).json({message:"unable to delete by this ID"})
    }else{
        return resp.status(200).json({message:'Product Succesfully deleted'})
    }
}

 exports.getAllbooks=getAllbooks;
 exports.addBook=addBook;
 exports.getById=getById;
 exports.updateBook=updateBook;
 exports.deleteBook=deleteBook;