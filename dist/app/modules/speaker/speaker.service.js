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
exports.SpeakerService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = require("../../../shared/prisma");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const createData = yield prisma_1.prisma.speaker.create({ data });
    if (!createData) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Unable to create Speaker');
    }
    if (createData) {
        const result = yield prisma_1.prisma.speaker.findUnique({
            where: {
                id: createData === null || createData === void 0 ? void 0 : createData.id,
            },
        });
        return result;
    }
});
const getAllData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.speaker.findMany();
    return result;
});
const getEventSpeaker = (eventId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.speaker.findMany({
        where: {
            eventId,
        },
    });
    if ((result === null || result === void 0 ? void 0 : result.length) == 0) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Speakers not found!');
    }
    return result;
});
const getData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.speaker.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateData = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.speaker.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.speaker.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.SpeakerService = {
    insertIntoDB,
    getAllData,
    getEventSpeaker,
    getData,
    updateData,
    deleteData,
};
