"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewAndRatingValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        review: zod_1.z.string({
            required_error: 'review is required',
        }),
        userId: zod_1.z.string({
            required_error: 'userId is required',
        }),
        eventId: zod_1.z.string({
            required_error: 'eventId is required',
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        review: zod_1.z.string().optional(),
        userId: zod_1.z.string().optional(),
        eventId: zod_1.z.string().optional(),
    }),
});
exports.ReviewAndRatingValidation = {
    create,
    update,
};
