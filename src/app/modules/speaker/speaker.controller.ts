import { Event } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await EventService.insertIntoDB(req.body);

  sendResponse<Event>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event created successfully',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await EventService.getAllData();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Events fetched successfully',
    meta: result.meta,

    data: result.data,
  });
});

const getCategoryEvents = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, optionsData);
  const result = await EventService.getCategoryEvents(
    req.params.id,
    req.params.category,
    options,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Events with associated category data fetched successfully',
    data: result,
  });
});

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await EventService.getData(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event fetched successfully',
    data: result,
  });
});

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await EventService.updateData(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event updated successfully',
    data: result,
  });
});

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await EventService.deleteData(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event is deleted successfully',
    data: result,
  });
});
export const SpeakerCtrl = {
  insertIntoDB,
  getAllData,
  getCategoryEvents,
  getData,
  updateData,
  deleteData,
};
