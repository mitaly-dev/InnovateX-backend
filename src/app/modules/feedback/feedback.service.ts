import { Feedback } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const insertIntoDB = async (data: Feedback): Promise<Feedback> => {
  const result = await prisma.feedback.create({ data });
  return result;
};

const getAllData = async (): Promise<Feedback[]> => {
  const result = await prisma.feedback.findMany({});

  return result;
};

export const FeedbackService = {
  insertIntoDB,
  getAllData,
};
