import { Event } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BookingService } from './booking.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await BookingService.insertIntoDB(user?.userId, req.body);

  sendResponse<Event>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking created successfully',
    data: result,
  });
});

const getAllBooking = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await BookingService.getAllBooking(user?.userId, user?.role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking retrieved successfully',
    data: result,
  });
});

const getBooking = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await BookingService.getBooking(
    req.params.id,
    user?.userId,
    user?.role,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking fetched successfully',
    data: result,
  });
});

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingService.updateData(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking updated successfully',
    data: result,
  });
});

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingService.deleteData(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order is deleted successfully',
    data: result,
  });
});
export const BookingCtrl = {
  insertIntoDB,
  getAllBooking,
  getBooking,
  updateData,
  deleteData,
};
