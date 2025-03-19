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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_js_1 = __importDefault(require("../config/connection.js"));
const Question_js_1 = __importDefault(require("../models/Question.js"));
const cleanDb_js_1 = __importDefault(require("./cleanDb.js"));
const pythonQuestions_json_1 = __importDefault(require("./pythonQuestions.json"));
connection_js_1.default.once('open', () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, cleanDb_js_1.default)('Question', 'questions');
    yield Question_js_1.default.insertMany(pythonQuestions_json_1.default);
    console.log('Questions seeded!');
    process.exit(0);
}));
