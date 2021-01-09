"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var multer_1 = require("../libs/multer");
var photo_controller_1 = require("../controllers/photo.controller");
router.route('/product')
    .post(multer_1.storeProductPhoto.single('image'), photo_controller_1.createPhoto)
    .get(photo_controller_1.getPhotos);
router.route('/profile')
    .post(multer_1.storeProfilePhoto.single('image'), photo_controller_1.createPhoto);
exports.default = router;
