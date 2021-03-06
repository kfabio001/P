"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var user_controller_1 = require("../controllers/user.controller");
router.route('/registroPadre').post(user_controller_1.register);
router.route('/registroHijo').post(user_controller_1.registroHijo);
router.route('/registroMunicipio').post(user_controller_1.registroMuni);
router.route('/registroDepartamento').post(user_controller_1.registroDepa);
router.route('/login').post(user_controller_1.login);
router.route('/registroHijo').post(user_controller_1.getUser);
router.route('/accionesFaltantes').get(user_controller_1.getUser);
router.route('/santaPublicaciones').get(user_controller_1.getUser);
router.route('/mensaje').get(user_controller_1.getUser);
router.route('/carta').get(user_controller_1.getUser);
router.route('/agregarCarta').post(user_controller_1.getUser);
router.route('/cartaConfirmar').put(user_controller_1.getUser);
router.route('/juguetes').get(user_controller_1.getJuguete);
router.route('/getUsuarios').get(user_controller_1.getUser);
router.route('/getHIJO').get(user_controller_1.getHijo);
router.route('/getDps').get(user_controller_1.getUser);
//import { getCart, confirmRequest, cleanCart } from '../controllers/cart.controller';
//router.route('/cart/:email').get(getCart);
//router.route('/cart').post(confirmRequest);
//router.route('/cleanCart').post(cleanCart);
exports.default = router;
