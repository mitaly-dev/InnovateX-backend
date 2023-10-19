/* eslint-disable @typescript-eslint/no-explicit-any */
import { Booking, Prisma, UserRole } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { prisma } from '../../../shared/prisma';

const insertIntoDB = async (
  userId: string,
  eventId: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  const alreadyExit = await prisma.booking.findFirst({
    where: {
      user: {
        id: userId,
      },
      eventId: eventId,
    },
    include: {
      events: true,
    },
  });

  if (alreadyExit) {
    throw new ApiError(httpStatus.NOT_ACCEPTABLE, 'Already Added!');
  }
  const result = await prisma.booking.create({
    data: {
      userId,
      eventId: eventId,
    },
  });

  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllBooking = async (
  userId: string,
  role: string,
): Promise<Booking[]> => {
  let result;
  if (role === UserRole.user) {
    result = await prisma.booking.findMany({
      where: {
        user: {
          id: userId,
        },
      },
      include: {
        events: true,
        user: true,
      },
    });
  } else {
    result = await prisma.booking.findMany({
      include: {
        events: true,
        user: true,
      },
    });
  }
  if (result?.length === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Booking not found!');
  }
  return result;
};

const getBooking = async (
  eventId: string,
  userId: string,
): Promise<Booking | null> => {
  const result = await prisma.booking.findFirst({
    where: {
      eventId: eventId,
      userId: userId,
    },
    include: {
      events: true,
      user: true,
    },
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Booking not found!');
  }
  return result;
};

const updateData = async (
  id: string,
  payload: Prisma.BookingUpdateInput,
): Promise<Booking> => {
  const result = await prisma.booking.update({
    where: {
      id,
    },
    include: {
      events: true,
    },
    data: payload,
  });
  return result;
};

const deleteData = async (id: string): Promise<Booking> => {
  const result = await prisma.booking.delete({
    where: {
      id,
    },
    include: {
      events: true,
    },
  });
  return result;
};

export const BookingService = {
  insertIntoDB,
  getAllBooking,
  getBooking,
  updateData,
  deleteData,
};
