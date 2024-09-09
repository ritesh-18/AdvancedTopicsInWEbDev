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
function InsertData(email, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma.user.create({
                data: {
                    email: email,
                    password: password,
                    firstName: firstname,
                    lastName: lastname,
                }
            });
            console.log(response);
        }
        catch (error) {
            console.error(error);
        }
    });
}
InsertData("abcdef@gmail.com", "12345678", "Ritesh4", "Chauhan4");
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma.user.findMany();
            console.table(response);
        }
        catch (error) {
            console.log(error);
        }
    });
}
getData();
