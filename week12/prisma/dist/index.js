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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertIntoUsers = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.users.create({
        data: {
            username,
            password
        }
    });
    console.log(user);
});
const insertIntoTodos = (userId, title, description) => __awaiter(void 0, void 0, void 0, function* () {
    const Todo = yield prisma.todos.create({
        data: {
            userId,
            title,
            description
        }
    });
    console.log(Todo);
});
// get todos and username of specific user
const getTodos = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.todos.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            user: {
                select: {
                    username: true
                }
            }
        }
    });
    console.log(res);
});
const updateTodo = (todoId, title, description) => __awaiter(void 0, void 0, void 0, function* () {
    const update = yield prisma.todos.update({
        where: {
            id: todoId
        },
        data: {
            title,
            description
        }
    });
    console.log(update);
});
updateTodo(10, "new title", "description of new todo");
