import { z } from 'zod';

const create = z.object({
  body: z.object({
    review: z.string({
      required_error: 'review is required',
    }),
    rating: z.string({
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
    title: z.string().optional(),
    author: z.string().optional(),
    genre: z.string().optional(),
    price: z.number().optional(),
  }),
});

export const ReviewAndRatingValidation = {
  create,
  update,
};
