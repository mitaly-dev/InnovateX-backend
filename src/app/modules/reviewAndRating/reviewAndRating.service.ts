import { ReviewAndRating } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { prisma } from '../../../shared/prisma';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const insertIntoDB = async (data: ReviewAndRating): Promise<any> => {
  const result = await prisma.reviewAndRating.create({ data });
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to create Review');
  }
  return result;
};

const getAllData = async (): Promise<ReviewAndRating[]> => {
  const result = await prisma.reviewAndRating.findMany();
  return result;
};
const getData = async (id: string): Promise<ReviewAndRating | null> => {
  const result = await prisma.reviewAndRating.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateData = async (
  id: string,
  payload: Partial<ReviewAndRating>,
): Promise<ReviewAndRating> => {
  const result = await prisma.reviewAndRating.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteData = async (id: string): Promise<ReviewAndRating> => {
  const result = await prisma.reviewAndRating.delete({
    where: {
      id,
    },
  });
  return result;
};

export const ReviewAndRatingService = {
  insertIntoDB,
  getAllData,
  getData,
  updateData,
  deleteData,
};
