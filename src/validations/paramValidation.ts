import Joi from 'joi';

const message = Joi.object({
    message: Joi.string().min(1).max(499).required().messages({
        'string.base': '"message" should be a type of string',
        'string.empty': '"message" cannot be an empty string',
        'string.max': '"message" should have a maximum length of 500',
        'any.required': '"message" is required'
    })
});

export const paramValidation = {
    message
};
