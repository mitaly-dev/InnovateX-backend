import { z } from 'zod';

const create = z.object({
  body: z.object({
    review: z.string({
      required_error: 'review is required',
    }),
    rating: z.number({
      required_error: 'author is required',
    }),
    userId: z.string({
      required_error: 'userId is required',
    }),
    eventId: z.string({
      required_error: 'eventId is required',
    }),
  }),
});

const update = z.object({
  body: z.object({
    review: z.string().optional(),
    rating: z.number().optional(),
    userId: z.string().optional(),
    eventId: z.string().optional(),
  }),
});

export const ReviewAndRatingValidation = {
  create,
  update,
};
