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
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanCart = exports.confirmRequest = exports.getCart = exports.newProductRequest = void 0;
var oracle_1 = require("../oracle");
function newProductRequest(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, id_product, date, query, result, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    id_product = req.body.id_product;
                    date = req.body.date;
                    query = "INSERT INTO SOLICITUD(cliente,producto,cantidad,fecha_solicitud,ejecutada) VALUES('" + email + "'," + id_product + ",1,TO_DATE('" + date + "', 'MON DD, YYYY, HH:MI:SS AM'),0)";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, oracle_1.connection.execute(query, [], { autoCommit: true })];
                case 2:
                    result = _a.sent();
                    if (result.rowsAffected) {
                        res.json({ message: "Insertado correctamente" });
                    }
                    else {
                        res.json({ message: "No se pudo insertar" });
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    res.status(500).json(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.newProductRequest = newProductRequest;
function getCart(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, query, result, response, index, element, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(req.params);
                    email = req.params.email;
                    query = "SELECT soli.id_solicitud, soli.producto, prod.nombre_producto, prod.precio_producto, soli.cantidad, prod.usuario, soli.ejecutada FROM SOLICITUD soli JOIN PRODUCTO prod ON soli.producto = prod.id_producto WHERE soli.cliente = '" + email + "' ORDER BY soli.fecha_solicitud DESC";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, oracle_1.connection.execute(query)];
                case 2:
                    result = _a.sent();
                    if (result.rows) {
                        response = [];
                        for (index = 0; index < result.rows.length; index++) {
                            element = result.rows[index];
                            response.push({
                                id: element[0],
                                product: element[1],
                                name: element[2],
                                price: element[3],
                                quantity: element[4],
                                seller: element[5],
                                confirmed: element[6]
                            });
                        }
                        res.json(response);
                    }
                    else {
                        res.send(null);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    res.send(null);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getCart = getCart;
function confirmRequest(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var binds, query, result, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    binds = req.body.array;
                    query = "UPDATE SOLICITUD SET cantidad=:quantity, ejecutada=1 WHERE id_solicitud=:id";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, oracle_1.connection.executeMany(query, binds, { autoCommit: true })];
                case 2:
                    result = _a.sent();
                    if (result.rowsAffected) {
                        res.json({ message: "Actualizados correctamente" });
                    }
                    else {
                        res.json({ message: "No se actualizó" });
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_3 = _a.sent();
                    console.error(err_3);
                    res.status(500).json(err_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.confirmRequest = confirmRequest;
function cleanCart(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, query, result, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    query = "DELETE FROM SOLICITUD WHERE cliente='" + email + "'";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, oracle_1.connection.execute(query, [], { autoCommit: true })];
                case 2:
                    result = _a.sent();
                    if (result.rowsAffected) {
                        res.json({ message: "Eliminados correctamente" });
                    }
                    else {
                        res.json({ message: "No se eliminó" });
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_4 = _a.sent();
                    console.error(err_4);
                    res.status(500).json(err_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.cleanCart = cleanCart;
