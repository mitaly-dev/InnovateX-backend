"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'title is required',
        }),
        description: zod_1.z.string({
            required_error: 'description is required',
        }),
        price: zod_1.z.number({
            required_error: 'price is required',
        }),
        totalSeats: zod_1.z.number({
            required_error: 'totalSeats is required',
        }),
        availableSeats: zod_1.z.number({
            required_error: 'availableSeats is required',
        }),
        eventDate: zod_1.z.string({
            required_error: 'eventDate is required',
        }),
        imageUrl: zod_1.z.string({
            required_error: 'imageUrl is required',
        }),
        location: zod_1.z.string({
            required_error: 'location is required',
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        genre: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        totalSeats: zod_1.z.number().optional(),
        availableSeats: zod_1.z.number().optional(),
        eventDate: zod_1.z.string().optional(),
        imageUrl: zod_1.z.string().optional(),
        location: zod_1.z.string().optional(),
    }),
});
exports.EventValidation = {
    create,
    update,
};
