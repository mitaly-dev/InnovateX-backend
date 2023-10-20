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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const prisma_1 = require("../../../shared/prisma");
const event_const_1 = require("./event.const");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const createData = yield prisma_1.prisma.event.create({ data });
    if (!createData) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Unable to create event');
    }
    if (createData) {
        const result = yield prisma_1.prisma.event.findUnique({
            where: {
                id: createData === null || createData === void 0 ? void 0 : createData.id,
            },
        });
        return result;
    }
});
const getAllData = (filter, options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { search } = filter, filterData = __rest(filter, ["search"]);
    const andConditions = [];
    if (search) {
        andConditions.push({
            OR: event_const_1.filterOptions.map(field => ({
                [field]: {
                    contains: search,
                    mode: 'insensitive',
                },
            })),
        });
    }
    if (((_a = Object.keys(filterData)) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    equals: filterData[key],
                },
            })),
        });
    }
    const { page, size, skip, minPrice, maxPrice } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    if (minPrice !== undefined && maxPrice !== undefined) {
        andConditions.push({
            price: {
                gte: Number(minPrice),
                lte: Number(maxPrice),
            },
        });
    }
    const whereConditons = (andConditions === null || andConditions === void 0 ? void 0 : andConditions.length) > 0 ? { AND: andConditions } : {};
    const result = yield prisma_1.prisma.event.findMany({
        where: whereConditons,
        skip,
        take: size,
        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options === null || options === void 0 ? void 0 : options.sortOrder,
            }
            : { price: 'desc' },
    });
    const total = yield prisma_1.prisma.event.count();
    return {
        meta: {
            page,
            size,
            total,
            totalPage: Math.ceil(total / size),
        },
        data: result,
    };
});
const getData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.event.findUnique({
        where: {
            id,
        },
    });
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateData = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.event.update({
        where: {
            id,
        },
        data: payload === null || payload === void 0 ? void 0 : payload.data,
    });
    return result;
});
const deleteData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.event.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.EventService = {
    insertIntoDB,
    getAllData,
    getData,
    updateData,
    deleteData,
};
