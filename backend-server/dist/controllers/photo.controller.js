"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhotos = exports.createPhoto = void 0;
function createPhoto(req, res) {
    var photoPath = { path: req.file.path };
    return res.send(photoPath);
}
exports.createPhoto = createPhoto;
function getPhotos(req, res) {
    console.log("Guardando foto");
    return res.json({
        message: 'Photo'
    });
}
exports.getPhotos = getPhotos;
