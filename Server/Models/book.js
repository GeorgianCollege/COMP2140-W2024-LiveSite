"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    releaseDate: { type: Date },
    genres: [String],
    authors: { type: mongoose_1.default.Schema.Types.ObjectId, refPath: 'type' },
    description: String,
    country: String,
    languages: [String],
    publisher: String,
    pages: Number,
}, {
    collection: 'books'
});
const Book = mongoose_1.default.model('Book', bookSchema);
exports.default = Book;
//# sourceMappingURL=book.js.map