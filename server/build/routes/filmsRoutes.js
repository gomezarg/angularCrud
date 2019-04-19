"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class FilmsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Films'));
    }
}
const filmsRoutes = new FilmsRoutes();
exports.default = filmsRoutes.router;
