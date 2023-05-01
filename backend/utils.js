import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return JsonWebTokenError.sign(user, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
};