import rateLimit from 'express-rate-limit';

// Rate limiter middleware
const apiLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 60,
    message: "Too many requests from this IP, please try again after a minutes."
});

export default apiLimiter;
