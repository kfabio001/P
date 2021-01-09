"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertKeyWord = exports.insertProduct2 = exports.insertProduct = exports.getSpecificProduct = exports.getProducts = exports.getCategories = void 0;
var oracledb_1 = __importDefault(require("oracledb"));
var oracle_1 = require("../oracle");
function getCategories(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "SELECT nombre_categoria FROM CATEGORIA ORDER BY nombre_categoria ASC";
                    return [4 /*yield*/, oracle_1.connection.execute(query)];
                case 1:
                    result = _a.sent();
                    try {
                        if (result.rows) {
                            res.send(result.rows);
                        }
                        else {
                            res.send(null);
                        }
                    }
                    catch (err) {
                        res.send(null);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getCategories = getCategories;
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "SELECT * FROM PRODUCTO ORDER BY fecha_publicacion DESC";
                    return [4 /*yield*/, oracle_1.connection.execute(query, [], { outFormat: oracledb_1.default.OUT_FORMAT_OBJECT })];
                case 1:
                    result = _a.sent();
                    try {
                        if (result.rows) {
                            /**
                            let response = [];
                            for (let i = 0; i < result.rows.length; i++) {
                                const row = result.rows[0];
                                let product = {
                                    id_product: row[0],
                                    name: row[1],
                                    price: row[2],
                                    category: row[3],
                                    detail: row[4],
                                    user: row[5],
                                    imgFile: row[6],
                                    date: row[7],
                                    visible: row[8]
                                }
                                response.push(product);
                            }
                             */
                            res.json(result.rows);
                        }
                        else {
                            res.send(null);
                        }
                    }
                    catch (err) {
                        res.send(null);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getProducts = getProducts;
function getSpecificProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id_producto, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id_producto = req.params.id;
                    query = "SELECT * FROM PRODUCTO WHERE id_producto = " + id_producto;
                    return [4 /*yield*/, oracle_1.connection.execute(query)];
                case 1:
                    result = _a.sent();
                    try {
                        if (result.rows) {
                            res.json(result.rows[0]);
                        }
                        else {
                            res.send(null);
                        }
                    }
                    catch (err) {
                        res.send(null);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getSpecificProduct = getSpecificProduct;
function insertProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var nombre_producto, precio_producto, categoria, detalle_producto, usuario, imagen, fecha_publicacion, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nombre_producto = req.body.name;
                    precio_producto = req.body.price;
                    categoria = req.body.category;
                    detalle_producto = req.body.detail;
                    usuario = req.body.user;
                    imagen = req.body.image;
                    fecha_publicacion = req.body.postDate;
                    query = "INSERT INTO PRODUCTO(nombre_producto,precio_producto,categoria,detalle_producto,usuario,imagen,fecha_publicacion,es_visible) VALUES('" + nombre_producto + "'," + precio_producto + ",'" + categoria + "','" + detalle_producto + "','" + usuario + "','" + imagen + "',TO_DATE('" + fecha_publicacion + "', 'MONTH DD, YYYY'),1)";
                    console.log(query);
                    return [4 /*yield*/, oracle_1.connection.execute(query, [], { autoCommit: true })];
                case 1:
                    result = _a.sent();
                    try {
                        if (result.rowsAffected) {
                            console.log(result);
                            res.send(result.rows);
                        }
                        else {
                            res.send(null);
                        }
                    }
                    catch (err) {
                        res.send(null);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.insertProduct = insertProduct;
function insertProduct2(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var nombre_producto, precio_producto, categoria, detalle_producto, usuario, imagen, fecha_publicacion, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nombre_producto = req.body.name;
                    precio_producto = req.body.price;
                    categoria = req.body.category;
                    detalle_producto = req.body.detail;
                    usuario = req.body.user;
                    imagen = req.body.image;
                    fecha_publicacion = req.body.postDate;
                    query = "\n    DECLARE\n        id_prod INT;\n    BEGIN\n        :id_prod := inserta_producto('" + nombre_producto + "'," + precio_producto + ",'" + categoria + "','" + detalle_producto + "','" + usuario + "','" + imagen + "','" + fecha_publicacion + "');\n    END;";
                    return [4 /*yield*/, oracle_1.connection.execute(query, { id_prod: { dir: oracledb_1.default.BIND_OUT, type: oracledb_1.default.NUMBER } }, { autoCommit: true })];
                case 1:
                    result = _a.sent();
                    try {
                        if (result.outBinds) {
                            res.json({ id_producto: result.outBinds.id_prod });
                        }
                        else {
                            res.send(null);
                        }
                    }
                    catch (err) {
                        res.send(null);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.insertProduct2 = insertProduct2;
function insertKeyWord(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var binds, index, element, query1, err_1, id_producto, query2, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    binds = req.body.array;
                    index = 0;
                    _a.label = 1;
                case 1:
                    if (!(index < binds.length)) return [3 /*break*/, 6];
                    element = binds[index].value;
                    query1 = "INSERT INTO PALABRA_CLAVE(palabra_clave) VALUES('" + element + "')";
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, oracle_1.connection.execute(query1, [], { autoCommit: true })];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    return [3 /*break*/, 5];
                case 5:
                    index++;
                    return [3 /*break*/, 1];
                case 6:
                    id_producto = req.body.id_product;
                    query2 = "INSERT INTO PRODUCTO_CLAVE(producto,palabra_clave) VALUES(" + id_producto + ", :value)";
                    _a.label = 7;
                case 7:
                    _a.trys.push([7, 9, , 10]);
                    return [4 /*yield*/, oracle_1.connection.executeMany(query2, binds, { autoCommit: true })];
                case 8:
                    _a.sent();
                    res.json({ message: "todo bien" });
                    return [3 /*break*/, 10];
                case 9:
                    err_2 = _a.sent();
                    res.status(500);
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
exports.insertKeyWord = insertKeyWord;
