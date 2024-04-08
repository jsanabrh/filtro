const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    pages: Number,
    description: String
});

const books = mongoose.model('books', bookSchema);

module.exports = books;