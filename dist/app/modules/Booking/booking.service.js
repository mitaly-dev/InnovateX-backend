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
exports.BookingService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = require("../../../shared/prisma");
const insertIntoDB = (userId, eventId) => __awaiter(void 0, void 0, void 0, function* () {
    const alreadyExit = yield prisma_1.prisma.booking.findFirst({
        where: {
            user: {
                id: userId,
            },
            eventId: eventId,
        },
        include: {
            events: true,
        },
    });
    if (alreadyExit) {
        throw new ApiError_1.default(http_status_1.default.NOT_ACCEPTABLE, 'Already Added!');
    }
    const result = yield prisma_1.prisma.booking.create({
        data: {
            userId,
            eventId: eventId,
        },
    });
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllBooking = (userId, role) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (role === client_1.UserRole.user) {
        result = yield prisma_1.prisma.booking.findMany({
            where: {
                user: {
                    id: userId,
                },
            },
            include: {
                events: true,
                user: true,
            },
        });
    }
    else {
        result = yield prisma_1.prisma.booking.findMany({
            include: {
                events: true,
                user: true,
            },
        });
    }
    if ((result === null || result === void 0 ? void 0 : result.length) === 0) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Booking not found!');
    }
    return result;
});
const getBooking = (eventId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.booking.findFirst({
        where: {
            eventId: eventId,
            userId: userId,
        },
        include: {
            events: true,
            user: true,
        },
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Booking not found!');
    }
    return result;
});
const updateData = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.booking.update({
        where: {
            id,
        },
        include: {
            events: true,
        },
        data: payload,
    });
    return result;
});
const deleteData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.booking.delete({
        where: {
            id,
        },
        include: {
            events: true,
        },
    });
    return result;
});
exports.BookingService = {
    insertIntoDB,
    getAllBooking,
    getBooking,
    updateData,
    deleteData,
};
