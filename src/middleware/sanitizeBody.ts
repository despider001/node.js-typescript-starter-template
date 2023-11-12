import { Request, Response, NextFunction } from 'express';
import sanitizeHtml from 'sanitize-html';

function sanitizeInput(input: any): any {
    if (typeof input === 'string') {
        return sanitizeHtml(input);
    } else if (Array.isArray(input)) {
        return input.map(sanitizeInput);
    } else if (typeof input === 'object' && input !== null) {
        const sanitizedObject: { [key: string]: any } = {};
        for (const key in input) {
            if (Object.prototype.hasOwnProperty.call(input, key)) {
                sanitizedObject[key] = sanitizeInput(input[key]);
            }
        }
        return sanitizedObject;
    }
    return input;  // return non-string input as-is
}

export default function sanitizeBody(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    req.body = sanitizeInput(req.body);
    next();
}
