"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeakerValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'name is required',
        }),
        designation: zod_1.z.string({
            required_error: 'designation is required',
        }),
        profileImg: zod_1.z.string({
            required_error: 'profileImg is required',
        }),
        eventId: zod_1.z.string({
            required_error: 'eventId  is required',
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        designation: zod_1.z.string().optional(),
        profileImg: zod_1.z.string().optional(),
        eventId: zod_1.z.string().optional(),
    }),
});
exports.SpeakerValidation = {
    create,
    update,
};
