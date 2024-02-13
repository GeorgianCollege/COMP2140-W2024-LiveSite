"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContact = exports.DisplayServices = exports.DisplayProducts = exports.DisplayAbout = exports.DisplayHome = void 0;
function DisplayHome(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHome = DisplayHome;
function DisplayAbout(req, res, next) {
    res.render('index', { title: 'About Us', page: 'about' });
}
exports.DisplayAbout = DisplayAbout;
function DisplayProducts(req, res, next) {
    res.render('index', { title: 'Our Products', page: 'products' });
}
exports.DisplayProducts = DisplayProducts;
function DisplayServices(req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services' });
}
exports.DisplayServices = DisplayServices;
function DisplayContact(req, res, next) {
    res.render('index', { title: 'Contact Us', page: 'contact' });
}
exports.DisplayContact = DisplayContact;
//# sourceMappingURL=index.js.map