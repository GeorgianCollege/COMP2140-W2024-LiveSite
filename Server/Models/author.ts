import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    name: String,
    birthDate: Date,
    deathDate: Date,
    country: String,
    languages: [String],
    genres: [String],
    biography: String
},
{
    collection: 'authors'
});

const Author = mongoose.model('Author', authorSchema);

export default Author;