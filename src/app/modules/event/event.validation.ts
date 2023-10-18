import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    description: z.string({
      required_error: 'description is required',
    }),
    price: z.number({
      required_error: 'price is required',
    }),
    totalSeats: z.number({
      required_error: 'totalSeats is required',
    }),
    availableSeats: z.number({
      required_error: 'availableSeats is required',
    }),
    eventDate: z.string({
      required_error: 'eventDate is required',
    }),
    imageUrl: z.string({
      required_error: 'imageUrl is required',
    }),
    location: z.string({
      required_error: 'location is required',
    }),
    categoryId: z.string({
      required_error: 'categoryId is required',
    }),
  }),
});

const update = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    genre: z.string().optional(),
    price: z.number().optional(),
    totalSeats: z.number().optional(),
    availableSeats: z.number().optional(),
    eventDate: z.string().optional(),
    imageUrl: z.string().optional(),
    location: z.string().optional(),
    categoryId: z.string().optional(),
  }),
});

export const EventValidation = {
  create,
  update,
};
