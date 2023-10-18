import { z } from 'zod';

const update = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    profileImg: z.string().optional(),
    password: z.string().optional(),
  }),
});
export const UserValidation = {
  update,
};
