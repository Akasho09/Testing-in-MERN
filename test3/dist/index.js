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
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const db_1 = require("./db/db");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
const sumInput = zod_1.z.object({
    a: zod_1.z.number(),
    b: zod_1.z.number()
});
exports.app.post("/sum", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { success } = sumInput.safeParse(data);
    if (success) {
        return res.json({
            answer: (Number(data["a"]) + Number(data["b"]))
        });
    }
    db_1.aksh.table1.create({
        data: {
            a: 1,
            b: 2,
            sum: 3
        }
    });
    return res.status(411).json({
        err: "Invalid Inputs"
    });
}));
exports.app.get("/sum", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.headers;
    const { success } = sumInput.safeParse(data);
    if (success) {
        return res.json({
            answer: (Number(data["a"]) + Number(data["b"]))
        });
    }
    return res.status(411).json({
        err: "Invalid Inputs"
    });
}));
