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
const updateUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateData = yield prisma.user.update({
            where: {
                email
            },
            data: {
                password
            },
            select: {
                id: true,
                email: true,
                password: true
            }
        });
        console.log(updateData);
    }
    catch (e) {
        console.log(e, "error found");
    }
});
const getSpecificUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma.user.findUnique({
            where: {
                email
            },
            select: {
                id: true,
                email: true,
                password: true
            }
        });
        console.log(data ? data : "user not found");
    }
    catch (e) {
        console.log(e, "error found");
    }
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma.user.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        console.log(data);
    }
    catch (e) {
        console.log(e, "error found");
    }
});
const deleteOne = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield prisma.user.delete({
            where: {
                email
            },
            select: {
                id: true,
                email: true
            }
        });
        console.log(deleted ? deleted : "Data not found");
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2025') {
                console.log('No matching record found for deletion (P2025)');
            }
            else {
                console.log(`Prisma error ${e.code}:`, e.message);
            }
        }
        else {
            console.log('Unexpected error:', e);
        }
    }
});
deleteOne("test@gmail.com");
