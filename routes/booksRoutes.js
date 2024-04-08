const express = require('express');
const router = express.Router();
const bookController = require('../controllers/booksController.js');

router.get('/api/v1/books', bookController.getAllBooks);

router.get('/api/v1/getBookById/:_id', bookController.getBook)

router.get('/api/v1/getAuthor/:author', bookController.getByAuthor);

router.get('/api/v1/getBookName/:name', bookController.getByName)

router.get('/api/v1/getPages/:pages', bookController.getByPages);

router.post('/api/v1/createBook', bookController.createBook);

router.put('/api/v1/updateBook/:_id', bookController.updateBook);

router.delete('/api/v1/deleteBook/:_id', bookController.deleteBook);

module.exports = router;