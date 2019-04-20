"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class FilmsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const films = yield database_1.default.query('SELECT * FROM films');
            res.json(films);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const films = yield database_1.default.query('SELECT * FROM films WHERE id = ?', [id]);
            if (films.length > 0) {
                return res.json(films[0]);
            }
            res.status(404).json({ text: "The film doesn't exists" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO films set ?", [req.body]);
            res.json({ message: 'Film saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE films set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Film was update' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM films WHERE ID = ?', [id]);
            res.json({ message: ' The film was deleted' });
        });
    }
}
const filmsController = new FilmsController();
exports.default = filmsController;
