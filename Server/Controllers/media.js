"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayBookList = void 0;
const book_1 = __importDefault(require("../Models/book"));
function DisplayBookList(req, res, next) {
    book_1.default.find(function (err, bookCollection) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Book List', page: 'book-list', books: bookCollection });
    });
}
exports.DisplayBookList = DisplayBookList;
//# sourceMappingURL=media.js.map