import { Feedback } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FeedbackService } from './feedback.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback created successfully',
    data: result,
  });
});
const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackService.getAllData();

  sendResponse<Feedback[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback fetched successfully',
    data: result,
  });
});

export const FeedbackCtrl = {
  insertIntoDB,
  getAllData,
};
