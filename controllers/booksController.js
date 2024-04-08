const Book = require('../models/bookModel');

const bookController = {
    getAllBooks: async(req,res) => {
        try {
            const book = await Book.find();
            res.json(book)
        } catch (error) {
            console.error('Error getting all books: ', error);
            res.status(500).json({messge:'Internal Server Error'});
        }
    },
    getBook: async(req,res) => {
        const id = req.params._id;
        try {
            const bookId = await Book.findById(id);
            res.json(bookId);
        } catch (error) {
            console.error('Error getting book: ', error);
            res.status(500).json({messge:'Internal Server Error'});
        }
    },
    getByAuthor: async(req,res) => {
        const {author} = req.params;
        try {
            const bookAuthor = await Book.find({author:author});
            res.json(bookAuthor);
        } catch (error) {
            console.error('Error getting author: ', error);
            res.status(500).json({messge:'Internal Server Error'});
        }
    },
    getByName: async(req,res)=>{
        const {name} = req.params;
        try {
            const bookName = await Book.find({name:name});
            res.json(bookName);
        } catch (error) {
            console.error('Error getting books name: ', error);
            res.status(500).json({messge:'Internal Server Error'});
        }
    },
    getByPages: async(req,res) => {
        const {pages} = req.params;
        try {
            const bookPages = await Book.find({pages:pages});
            res.json(bookPages);
        } catch (error) {
            console.error('Error getting books pages: ', error);
            res.status(500).json({messge:'Internal Server Error'});
        }
    },
    createBook: async(req,res) => {
        const bookData = req.body;
        try {
           const newBook = new Book(bookData);
           const savedBook = await newBook.save();
           res.status(201).json(savedBook);
        } catch (error) {
            console.error('Error creating book: ', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    updateBook: async(req,res) => {
        try {
            const{_id} = req.params;
            const bookUpdate = await Book.findOneAndUpdate({_id:_id},{$set:{name:'Pedrito'}});
            res.json(bookUpdate);
        } catch (error) {
            console.error('Error updating book', error);
            res.status(500).json({message: 'Internal Server Error'})
        }
    },
    deleteBook: async(req,res) => {
        try {
            const {_id} = req.params;
            const deleteBook = await Book.findOneAndDelete({_id:_id});
            res.json(deleteBook);
        } catch (error) {
            console.error('Error when deleting book',error);
            res.status(500).json({message: 'Internal Server Error'})
        }
    }
}

module.exports = bookController;