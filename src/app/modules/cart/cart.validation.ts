import { z } from 'zod';

const create = z.object({
  body: z.object({
    eventId: z.string({ required_error: 'eventId is required' }),
    userId: z.string({ required_error: 'userId is required' }),
  }),
});
const update = z.object({
  body: z.object({
    eventId: z.string().optional(),
    userId: z.string().optional(),
  }),
});
export const CartValidation = {
  create,
  update,
};
