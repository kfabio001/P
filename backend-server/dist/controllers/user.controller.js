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
exports.updateCredits = exports.updatePassword = exports.updateInfo = exports.updateProfilePhoto = exports.registerr = exports.login = exports.loginHijo = exports.getJuguete = exports.getUser = exports.getHijo = exports.getDepartamento = exports.getMunicipio = exports.register = exports.registroHijo = exports.registroMuni = exports.registroDepa = exports.loginE = void 0;
var oracle_1 = require("../oracle");
var idDepartamento = "1";
var nombreDepartamento = "1";
function loginE(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, pass, query, result, response, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    pass = req.body.password;
                    query = "SELECT * FROM Estudiante WHERE email = '" + email + "' AND contrasena = '" + pass + "'";
                    return [4 /*yield*/, oracle_1.connection.execute(query)];
                case 1:
                    result = _a.sent();
                    try {
                        if (result.rows) {
                            if (result.rows.length == 1) {
                                response = {
                                    auth: true
                                };
                                res.json(response);
                            }
                            else {
                                response = {
                                    auth: false
                                };
                                res.json(response);
                            }
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
exports.loginE = loginE;
/*"email":"email2",
    "password": "contra2",
    "nombrePadre": "nombre2",
    "nombreHijo":"nombre2",
    "edad":"11",
    "dirreccion":"direccion2",
    "municipio":"municipio2",
    "departamento":"departamento2",
    "nick":"email2",
    "sexo":"sexo2",
   
    "bastones":"500"*/
function registroDepa(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, pass, nombrePadre, nombreHijo, telefono, edad, direccion, municipio, departamento, nick, sexo, bastones, idPadre, query3, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    pass = req.body.password;
                    nombrePadre = req.body.nombrePadre;
                    nombreHijo = req.body.nombreHijo;
                    telefono = req.body.telefono;
                    edad = req.body.edad;
                    direccion = req.body.direccion;
                    municipio = req.body.municipio;
                    departamento = req.body.municipio;
                    nick = req.body.nick;
                    sexo = req.body.sexo;
                    bastones = req.body.bastones;
                    idPadre = req.body.idPadre;
                    query3 = "INSERT INTO DEPARTAMENTO(nombre)VALUES('" + departamento + "')";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, oracle_1.connection.execute(query3, [], { autoCommit: true })];
                case 2:
                    result = _a.sent();
                    if (result.rowsAffected) {
                        console.log("depa");
                    }
                    else {
                        res.status(400).send('Bad Request Depa');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    res.status(400).send('Bad Request Depa');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.registroDepa = registroDepa;
function registroMuni(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, pass, nombrePadre, nombreHijo, telefono, edad, direccion, municipio, departamento, nick, sexo, bastones, idPadre, query4, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    pass = req.body.password;
                    nombrePadre = req.body.nombrePadre;
                    nombreHijo = req.body.nombreHijo;
                    telefono = req.body.telefono;
                    edad = req.body.edad;
                    direccion = req.body.direccion;
                    municipio = req.body.municipio;
                    departamento = req.body.municipio;
                    nick = req.body.nick;
                    sexo = req.body.sexo;
                    bastones = req.body.bastones;
                    idPadre = req.body.idPadre;
                    query4 = "INSERT INTO MUNICIPIO(nombre,idDepartamento)VALUES('" + municipio + "','" + idDepartamento + "')";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, oracle_1.connection.execute(query4, [], { autoCommit: true })];
                case 2:
                    result = _a.sent();
                    if (result.rowsAffected) {
                        res.send(result);
                        console.log("muni");
                    }
                    else {
                        res.status(400).send('Bad Request Muni');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    res.status(400).send('Bad Request Muni');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.registroMuni = registroMuni;
function registroHijo(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, pass, nombrePadre, nombreHijo, telefono, edad, direccion, municipio, departamento, nick, sexo, bastones, idPadre, query2, result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    pass = req.body.password;
                    nombrePadre = req.body.nombrePadre;
                    nombreHijo = req.body.nombreHijo;
                    telefono = req.body.telefono;
                    edad = req.body.edad;
                    direccion = req.body.direccion;
                    municipio = req.body.municipio;
                    departamento = req.body.municipio;
                    nick = req.body.nick;
                    sexo = req.body.sexo;
                    bastones = req.body.bastones;
                    idPadre = req.body.idPadre;
                    idPadre = 1;
                    query2 = "INSERT INTO HIJO(nombre,sexo,edad,email,contra,bastones,bastonesGanados,idPadre) VALUES('" + nombreHijo + "','" + sexo + "','" + edad + "','" + nick + "','" + pass + "','" + bastones + "','0','" + idPadre + "')";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, oracle_1.connection.execute(query2, [], { autoCommit: true })];
                case 2:
                    result = _a.sent();
                    if (result.rowsAffected) {
                        // registroDepa(req,res)
                        res.send(result);
                        console.log("hijo");
                    }
                    else {
                        res.status(400).send('Bad Request hijo');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    res.status(400).send('Bad Request hijo');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.registroHijo = registroHijo;
function register(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, pass, nombrePadre, nombreHijo, telefono, edad, direccion, municipio, departamento, nick, sexo, bastones, idPadre, query, result, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    pass = req.body.password;
                    nombrePadre = req.body.nombrePadre;
                    nombreHijo = req.body.nombreHijo;
                    telefono = req.body.telefono;
                    edad = req.body.edad;
                    direccion = req.body.direccion;
                    municipio = req.body.municipio;
                    departamento = req.body.municipio;
                    nick = req.body.nick;
                    sexo = req.body.sexo;
                    bastones = req.body.bastones;
                    idPadre = req.body.idPadre;
                    query = "INSERT INTO PADRE(nombre,email,contra,telefono,credito,direccion ) VALUES('" + nombrePadre + "','" + email + "','" + pass + "','" + telefono + "','" + bastones + "','" + direccion + "')";
                    console.log(query);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, oracle_1.connection.execute(query, [], { autoCommit: true })];
                case 2:
                    result = _a.sent();
                    if (result.rowsAffected) {
                        //registroHijo(nombreHijo,sexo,edad,nick,pass,bastones,idPadre)
                        res.send(result);
                        console.log("padre");
                    }
                    else {
                        res.status(400).send('Bad Request hijo');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    res.status(400).send("Ese usuario ya existe");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.register = register;
function getMunicipio(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var query, result, response, responses, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "select * from MUNICIPIO";
                    return [4 /*yield*/, oracle_1.connection.execute(query)];
                case 1:
                    result = _a.sent();
                    try {
                        response = [];
                        responses = void 0;
                        if (result.rows) {
                            // res.send(result)
                            for (i = 0; i < result.rows.length; i++) {
                                responses = {
                                    //    nombre: result.rows[i],
                                    //email: result.rows[i],
                                    usuario: result.rows[i]
                                };
                                response.push(responses);
                            }
                            res.json(response);
                        }
                    }
                    catch (err) {
                        res.send("null");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getMunicipio = getMunicipio;
function getDepartamento(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "select idDepartamento from DEPARTAMENTO where nombre=" + nombreDepartamento;
                    return [4 /*yield*/, oracle_1.connection.execute(query)];
                case 1:
                    result = _a.sent();
                    try {
                        if (result.rows) {
                            idDepartamento = req.body.idDepartamento;
                            // res.send(result)
                            res.json("response");
                        }
                    }
                    catch (err) {
                        res.send("null");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getDepartamento = getDepartamento;
function getHijo(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var query, result, response, responses, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "select * from HIJO ";
                    return [4 /*yield*/, oracle_1.connection.execute(query)];
                case 1:
                    result = _a.sent();
                    try {
                        response = [];
                        responses = void 0;
                        if (result.rows) {
                            // res.send(result)
                            for (i = 0; i < result.rows.length; i++) {
                                responses = {
                                    //    nombre: result.rows[i],
                                    //email: result.rows[i],
                                    usuario: result.rows[i]
                                };
                                response.push(responses);
                            }
                            res.json(response);
                        }
                    }
                    catch (err) {
                        res.send("null");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getHijo = getHijo;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var query, result, response, responses;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "select * from PADRE";
                    return [4 /*yield*/, oracle_1.connection.execute(query)];
                case 1:
                    result = _a.sent();
                    try {
                        response = [];
                        responses = void 0;
                        if (result.rows) {
                            // res.send(result)
                            /*  for (let i = 0; i < result.rows.length; i++) {
                               responses = {
                                 nombre: result.rows[i][0],
                                  email: result.rows[i][1],
                                  usuario: result.rows[i][2]
                                 
                              }
                              response.push(responses);
                          }*/
                            res.json(responses);
                        }
                    }
                    catch (err) {
                        res.send("null");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getUser = getUser;
function getJuguete(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var query, result, response, responses, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "select * from JUGUETES";
                    return [4 /*yield*/, oracle_1.connection.execute(query)];
                case 1:
                    result = _a.sent();
                    try {
                        response = [];
                        responses = void 0;
                        if (result.rows) {
                            // res.send(result)
                            for (i = 0; i < result.rows.length; i++) {
                                responses = {
                                    //    nombre: result.rows[i],
                                    //email: result.rows[i],
                                    usuario: result.rows[i]
                                };
                                response.push(responses);
                            }
                            res.json(response);
                        }
                    }
                    catch (err) {
                        res.send("null");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getJuguete = getJuguete;
function loginHijo(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, pass, query, result, response, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    pass = req.body.password;
                    query = "SELECT * FROM HIJO WHERE email = '" + email + "' AND contra = '" + pass + "'";
                    return [4 /*yield*/, oracle_1.connection.execute(query)];
                case 1:
                    result = _a.sent();
                    try {
                        if (result.rows) {
                            console.log(result.rows.length);
                            if (result.rows.length >= 1) {
                                response = {
                                    auth: true
                                };
                                res.json(response);
                            }
                            else {
                                response = {
                                    auth: false
                                };
                                res.json(response);
                            }
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
exports.loginHijo = loginHijo;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, pass, query, result, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    pass = req.body.password;
                    query = "SELECT * FROM HIJO WHERE email = '" + email + "' AND contra= '" + pass + "'";
                    return [4 /*yield*/, oracle_1.connection.execute(query)];
                case 1:
                    result = _a.sent();
                    try {
                        if (result.rows) {
                            response = {
                                nombre: result.rows[0][1],
                                sexo: result.rows[0][2],
                                edad: result.rows[0][3],
                                email: result.rows[0][4],
                                contra: result.rows[0][5],
                                bastones: result.rows[0][6],
                                bastonesG: result.rows[0][7],
                                idPadre: result.rows[0][8]
                            };
                            res.json(response);
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
exports.login = login;
function registerr(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, pass, firstName, lastName, birthDate, country, query, result, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    pass = req.body.password;
                    firstName = req.body.firstName;
                    lastName = req.body.lastName;
                    birthDate = req.body.birthDate;
                    country = req.body.country;
                    query = "INSERT INTO USUARIO(correo_electronico,contrasena,nombre,apellido,fecha_nac,pais,tipo,creditos) VALUES('" + email + "','" + pass + "','" + firstName + "','" + lastName + "',DATE '" + birthDate + "','" + country + "',2,10000)";
                    console.log(query);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, oracle_1.connection.execute(query, [], { autoCommit: true })];
                case 2:
                    result = _a.sent();
                    if (result.rowsAffected) {
                        res.send(result);
                    }
                    else {
                        res.status(400).send('Bad Request');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    res.status(400).send("Ese usuario ya existe");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.registerr = registerr;
function updateProfilePhoto(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, path, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    path = req.body.path;
                    query = "UPDATE USUARIO SET foto_perfil = '" + path + "' WHERE correo_electronico='" + email + "'";
                    console.log(query);
                    return [4 /*yield*/, oracle_1.connection.execute(query, [], { autoCommit: true })];
                case 1:
                    result = _a.sent();
                    if (result.rowsAffected) {
                        res.send(result);
                    }
                    else {
                        res.status(400).send('Bad Request');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateProfilePhoto = updateProfilePhoto;
function updateInfo(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, firstName, lastName, birthDate, country, query, result, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    firstName = req.body.firstName;
                    lastName = req.body.lastName;
                    birthDate = req.body.birthDate;
                    country = req.body.country;
                    query = "UPDATE USUARIO SET nombre = '" + firstName + "', apellido = '" + lastName + "', pais = '" + country + "', fecha_nac = TO_DATE('" + birthDate + "', 'MONTH DD, YYYY') WHERE correo_electronico = '" + email + "'";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, oracle_1.connection.execute(query, [], { autoCommit: true })];
                case 2:
                    result = _a.sent();
                    if (result.rowsAffected) {
                        res.send({ data: "Datos actualizados" });
                    }
                    else {
                        res.send({ data: "No se hicieron cambios" });
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    res.statusCode = 500;
                    res.statusMessage = error_6;
                    res.send();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateInfo = updateInfo;
function updatePassword(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, query, result, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    password = req.body.password;
                    query = "UPDATE USUARIO SET contrasena = '" + password + "' WHERE correo_electronico = '" + email + "'";
                    console.log(query);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, oracle_1.connection.execute(query, [], { autoCommit: true })];
                case 2:
                    result = _a.sent();
                    if (result.rowsAffected) {
                        res.send({ data: "Datos actualizados" });
                    }
                    else {
                        res.send({ data: "No se hicieron cambios" });
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _a.sent();
                    res.statusCode = 500;
                    res.statusMessage = error_7;
                    res.send();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updatePassword = updatePassword;
function updateCredits(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var binds, query, result, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    binds = req.body.array;
                    query = "BEGIN\n            actualiza_creditos(:email,:creditsToModify);\n        END;";
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
                    err_1 = _a.sent();
                    console.error(err_1);
                    res.status(500).json(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateCredits = updateCredits;
/*export async function getHijo(req: Request, res: Response) {
    
    // console.log("nose")
     
     let query = `select * from PADRE`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
             for (let i = 0; i < result.rows.length; i++) {
              responses = {
             //    nombre: result.rows[i],
                 //email: result.rows[i],
                 usuario: result.rows[i]
                
             }
             response.push(responses);
         }
             res.json(response);
         }
     } catch (err) {
         res.send("null");
     }
     
 }*/
