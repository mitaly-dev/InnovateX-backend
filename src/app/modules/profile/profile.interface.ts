import { UserRole } from '@prisma/client';

export type IProfile = {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  profileImg: string;
};
