"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const media_1 = require("../Controllers/media");
router.get('/', (req, res, next) => { (0, media_1.DisplayBookList)(req, res, next); });
exports.default = router;
//# sourceMappingURL=media.js.map