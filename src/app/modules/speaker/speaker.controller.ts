import { Speaker } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { SpeakerService } from './speaker.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await SpeakerService.insertIntoDB(req.body);

  sendResponse<Speaker>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Speaker created successfully',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await SpeakerService.getAllData();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Speakers fetched successfully',
    data: result,
  });
});

const getEventSpeaker = catchAsync(async (req: Request, res: Response) => {
  const result = await SpeakerService.getEventSpeaker(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Speakers with associated event data fetched successfully',
    data: result,
  });
});

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await SpeakerService.getData(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Speaker fetched successfully',
    data: result,
  });
});

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await SpeakerService.updateData(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Speaker updated successfully',
    data: result,
  });
});

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await SpeakerService.deleteData(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Speaker is deleted successfully',
    data: result,
  });
});
export const SpeakerCtrl = {
  insertIntoDB,
  getAllData,
  getEventSpeaker,
  getData,
  updateData,
  deleteData,
};
