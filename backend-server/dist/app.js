"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
// settings
app.set('port', process.env.PORT || 3005);
// middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
//  Utilizados para comunicarse con el cliente 
//  por medio de json's y poder leerlos.
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// routes
var index_1 = __importDefault(require("./routes/index"));
app.use('/api', index_1.default);
var user_1 = __importDefault(require("./routes/user"));
app.use('/user', user_1.default);
// accediendo a la carpeta uploads para almacenar imagenes
exports.default = app;
