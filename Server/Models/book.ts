import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {type : String, required: true},
    releaseDate: {type: Date},
    genres: [String],
    authors: [String],
    description: String,
    country: String,
    languages: [String],
    publisher: String,
    pages: Number,
},
{
    collection: 'books'
});

const Book = mongoose.model('Book', bookSchema);

export default Book;