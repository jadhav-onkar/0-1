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
const express_1 = __importDefault(require("express"));
const index_1 = require("../node_modules/.prisma/client/index");
const app = (0, express_1.default)();
const client = new index_1.PrismaClient();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("hi there ");
});
app.post("/blogs", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const blog = yield client.blogs.create({
        data: {
            title: body.title,
            description: body.description
        }
    });
    res.json({
        msg: "blog created",
        blog
    });
}));
app.listen(3000, () => {
    console.log("app is listning");
});
