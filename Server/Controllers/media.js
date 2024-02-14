"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayBookList = void 0;
const book_1 = __importDefault(require("../Models/book"));
function DisplayBookList(req, res, next) {
    book_1.default.find()
        .then((bookCollection) => {
        res.render('index', { title: 'Book List', page: 'bookList', books: bookCollection });
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.DisplayBookList = DisplayBookList;
//# sourceMappingURL=media.js.map