import express from 'express';
const router = express.Router();

// import the index controller
import { DisplayAbout, DisplayHome, DisplayContact, DisplayProducts, DisplayServices} from '../Controllers/index';

/* GET Default Route */
router.get('/', (req, res, next)=>{DisplayHome(req, res, next);});

/* GET Home Page */
router.get('/home', (req, res, next)=>{DisplayHome(req, res, next);});

/* GET About Page */
router.get('/about', (req, res, next)=>{DisplayAbout(req, res, next);});

/* GET Products Page */
router.get('/products', (req, res, next)=>{DisplayProducts(req, res, next);});

/* GET Services Page */
router.get('/services', (req, res, next)=>{DisplayServices(req, res, next);});

/* GET Services Page */
router.get('/contact', (req, res, next)=>{DisplayContact(req, res, next);});

export default router;
