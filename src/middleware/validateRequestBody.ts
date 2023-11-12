import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import CustomError from '../utils/CustomError';

const validateRequestBody = ( ...schemas: Joi.ObjectSchema[] ) => {
    return (req: Request, res: Response, next: NextFunction) => {

        const errors: string[] = [];
        schemas.forEach((schema) => {
            const result = schema.validate(req.body);
            if (result.error) {
                errors.push(result.error.details[0].message);
            }
        });

        if (errors.length > 0) {
            next(new CustomError(400, errors.join(', ')));
        }

        next();
    };
};

export { validateRequestBody };
