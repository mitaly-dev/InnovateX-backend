import { Cart } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const insertIntoDB = async (data: Cart): Promise<Cart> => {
  const result = await prisma.cart.create({ data });
  return result;
};

const getAllData = async (userId: string, eventId: string): Promise<Cart[]> => {
  const result = await prisma.cart.findMany({
    where: {
      eventId,
      userId,
    },
  });

  return result;
};

const deleteData = async (id: string): Promise<Cart> => {
  const result = await prisma.cart.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CartService = {
  insertIntoDB,
  getAllData,
  deleteData,
};
