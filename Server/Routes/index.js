"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_1 = require("../Controllers/index");
router.get('/', (req, res, next) => { (0, index_1.DisplayHome)(req, res, next); });
router.get('/home', (req, res, next) => { (0, index_1.DisplayHome)(req, res, next); });
router.get('/about', (req, res, next) => { (0, index_1.DisplayAbout)(req, res, next); });
router.get('/products', (req, res, next) => { (0, index_1.DisplayProducts)(req, res, next); });
router.get('/services', (req, res, next) => { (0, index_1.DisplayServices)(req, res, next); });
router.get('/contact', (req, res, next) => { (0, index_1.DisplayContact)(req, res, next); });
exports.default = router;
//# sourceMappingURL=index.js.map