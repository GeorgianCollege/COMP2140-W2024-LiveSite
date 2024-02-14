import express from 'express';
const router = express.Router();

import { DisplayBookList } from '../Controllers/media';

/* GET Default Route */
router.get('/book-list', (req, res, next)=>{DisplayBookList(req, res, next);});

export default router;