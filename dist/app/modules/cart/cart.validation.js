"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        eventId: zod_1.z.string({ required_error: 'eventId is required' }),
        userId: zod_1.z.string({ required_error: 'userId is required' }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        eventId: zod_1.z.string().optional(),
        userId: zod_1.z.string().optional(),
    }),
});
exports.CartValidation = {
    create,
    update,
};
