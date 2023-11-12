import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/CustomError';


export const sendMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json(req.body);
    } catch (error) {
        next(new CustomError(500, "Error retrieving message"));
    }
};
