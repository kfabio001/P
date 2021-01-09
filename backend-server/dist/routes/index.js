"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
//import photos from './photos'
//router.use('/photos', photos);
//import user from './user'
//router.use('/user', user);
//import product from './product';
//router.use('/products', product);
//import { getCategories } from '../controllers/product.controller';
//router.route('/categories').get(getCategories);
var user_controller_1 = require("../controllers/user.controller");
router.route('/login').post(user_controller_1.login);
router.route('/register').post(user_controller_1.register);
router.route('/getUsuarios').get(user_controller_1.getUser);
//import { insertKeyWord } from "../controllers/product.controller";
//router.route('/keywords').post(insertKeyWord);
exports.default = router;
