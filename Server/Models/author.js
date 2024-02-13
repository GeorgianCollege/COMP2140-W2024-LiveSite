"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const authorSchema = new mongoose_1.default.Schema({
    name: String,
    birthDate: Date,
    deathDate: Date,
    country: String,
    languages: [String],
    genres: [String],
    biography: String
}, {
    collection: 'authors'
});
const Author = mongoose_1.default.model('Author', authorSchema);
exports.default = Author;
//# sourceMappingURL=author.js.map