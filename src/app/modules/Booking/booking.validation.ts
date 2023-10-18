import { z } from 'zod';

const create = z.object({
  body: z.object({
    eventId: z.string({
      required_error: 'eventId is required',
    }),
  }),
});

export const BookingValidation = {
  create,
};
