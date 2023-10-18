import { z } from 'zod';

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
    designation: z.string({
      required_error: 'designation is required',
    }),
    profileImg: z.string({
      required_error: 'profileImg is required',
    }),
    eventId: z.number({
      required_error: 'eventId  is required',
    }),
  }),
});

const update = z.object({
  body: z.object({
    name: z.string().optional(),
    designation: z.string().optional(),
    profileImg: z.string().optional(),
    eventId: z.number().optional(),
  }),
});

export const SpeakerValidation = {
  create,
  update,
};
