"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        eventId: zod_1.z.string({
            required_error: 'eventId is required',
        }),
    }),
});
exports.BookingValidation = {
    create,
};
