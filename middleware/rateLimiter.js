const rateLimit = require('express-rate-limit');

exports.loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1, // 15 minutes
  max: 100, // 5 attempts
  message: {
    success: false,
    message: 'Too many login attempts, please try again after 1 minutes'
  }
});

exports.apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // 100 requests per minute
  message: {
    success: false,
    message: 'Too many requests, please try again later'
  }
}); 