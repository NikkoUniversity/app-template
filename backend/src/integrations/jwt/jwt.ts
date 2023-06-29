/* eslint-disable no-magic-numbers */
import jwt from 'jsonwebtoken';
import { JWT_REFRESH_SECRET, JWT_SECRET_SALT } from '../../configs/config';

export const createToken = (user: User): string => {
  return jwt.sign({
    iss: 'Issuer',
  }, JWT_SECRET_SALT, {
    algorithm: 'HS256',
    expiresIn: '15m',
  });
};

export const verifyAccessToken = (accessToken: string) => {
  return jwt.verify(accessToken, JWT_SECRET_SALT);
};

export const createRefreshToken = (user: User): string => {
  return jwt.sign({
    userId: user.id,
    iss: 'Issuer',
  }, JWT_REFRESH_SECRET, {
    algorithm: 'HS256',
    expiresIn: '60d',
  });
};

export const verifyRefreshToken = (refreshToken: string) => {
  return jwt.verify(refreshToken, JWT_REFRESH_SECRET);
};
