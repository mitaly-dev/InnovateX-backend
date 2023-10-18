import { Speaker } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { prisma } from '../../../shared/prisma';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const insertIntoDB = async (data: Speaker): Promise<any> => {
  const createData = await prisma.speaker.create({ data });
  if (!createData) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to create Speaker');
  }
  if (createData) {
    const result = await prisma.speaker.findUnique({
      where: {
        id: createData?.id,
      },
    });
    return result;
  }
};

const getAllData = async (): Promise<Speaker[]> => {
  const result = await prisma.speaker.findMany();

  return result;
};
const getEventSpeaker = async (eventId: string): Promise<Speaker[]> => {
  const result = await prisma.speaker.findMany({
    where: {
      eventId,
    },
  });

  if (result?.length == 0) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Speakers not found!');
  }

  return result;
};
const getData = async (id: string): Promise<Speaker | null> => {
  const result = await prisma.speaker.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateData = async (
  id: string,
  payload: Partial<Speaker>,
): Promise<Speaker> => {
  const result = await prisma.speaker.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteData = async (id: string): Promise<Speaker> => {
  const result = await prisma.speaker.delete({
    where: {
      id,
    },
  });
  return result;
};

export const SpeakerService = {
  insertIntoDB,
  getAllData,
  getEventSpeaker,
  getData,
  updateData,
  deleteData,
};
