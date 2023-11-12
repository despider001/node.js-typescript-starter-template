import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/CustomError';
import logger from '../config/loggerConfig';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let customError = {
    status: err.statusCode || 500,
    message: err.message || 'Internal Server Error'
  };

  // Log the error
  logger.error(`${customError.status} - ${customError.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  // Handle specific types of errors or extend as needed.
  if (err instanceof CustomError) {
    return res.status(customError.status).json({ status: customError.status, message: customError.message });
  }

  return res.status(500).json({ status: 500, message: 'Internal Server Error' });
};

export default errorHandler;
