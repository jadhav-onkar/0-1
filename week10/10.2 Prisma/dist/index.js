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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../generated/prisma/client");
const prisma = new client_1.PrismaClient();
const insertIntoUser = (userDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield prisma.user.create({
            data: {
                email: userDetails.email,
                name: userDetails.name,
                password: userDetails.password
            },
            select: {
                id: true,
                email: true,
                name: true
            }
        });
        console.log(res);
    }
    catch (e) {
        console.log(e, "error found");
    }
});
insertIntoUser({
    email: "vaibhav@gmail.com",
    name: "Vaibhav",
    password: "Vaibhav@0230"
});
