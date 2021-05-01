"use strict";
// const express = require('express')
// const mongoose = require('mongoose')
// const ApiRoutes = require('./routes')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
// import ApiRoutes from './routes';
var app = express_1.default();
var a = dotenv_1.default.config();
console.log(a.parsed);
// app.use('/api', ApiRoutes)
var ur = 'mongodb+srv://sharan123:sharan123k@cluster0.ytgcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const url = 'mongodb+srv://innovation:innovation@cluster0.u3gkx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose_1.default.connect(ur, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, function () {
    console.log("DB connection established");
});
app.listen(5000, function () {
    console.log("server started at port: 5000");
});
//# sourceMappingURL=index.js.map