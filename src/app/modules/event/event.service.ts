import { Event, Prisma } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { prisma } from '../../../shared/prisma';
import { filterOptions } from './event.const';
import { IfilterData } from './event.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const insertIntoDB = async (data: Event): Promise<any> => {
  const createData = await prisma.event.create({ data });
  if (!createData) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to create event');
  }
  if (createData) {
    const result = await prisma.event.findUnique({
      where: {
        id: createData?.id,
      },
    });
    return result;
  }
};

const getAllData = async (
  filter: IfilterData,
  options: IPaginationOptions,
): Promise<IGenericResponse<Event[]>> => {
  const { search, ...filterData } = filter;

  const andConditions = [];
  if (search) {
    andConditions.push({
      OR: filterOptions.map(field => ({
        [field]: {
          contains: search,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData)?.length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const { page, size, skip, minPrice, maxPrice } =
    paginationHelpers.calculatePagination(options);

  if (minPrice !== undefined && maxPrice !== undefined) {
    andConditions.push({
      price: {
        gte: Number(minPrice),
        lte: Number(maxPrice),
      },
    });
  }

  const whereConditons: Prisma.EventWhereInput =
    andConditions?.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.event.findMany({
    where: whereConditons,
    skip,
    take: size,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options?.sortOrder,
          }
        : { price: 'desc' },
  });

  const total = await prisma.event.count();

  return {
    meta: {
      page,
      size,
      total,
      totalPage: Math.ceil(total / size),
    },
    data: result,
  };
};

const getData = async (id: string): Promise<Event | null> => {
  const result = await prisma.event.findUnique({
    where: {
      id,
    },
  });
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateData = async (id: string, payload: any): Promise<Event> => {
  const result = await prisma.event.update({
    where: {
      id,
    },

    data: payload?.data,
  });
  return result;
};

const deleteData = async (id: string): Promise<Event> => {
  const result = await prisma.event.delete({
    where: {
      id,
    },
  });
  return result;
};

export const EventService = {
  insertIntoDB,
  getAllData,
  getData,
  updateData,
  deleteData,
};
