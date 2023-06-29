/* eslint-disable sonarjs/no-duplicate-string */
import { FastifyReply, FastifyRequest } from 'fastify';
import { logger } from '../../logs/logger';
import { StatusCodeEnum } from './base.interface';

export const CheckUserController = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    reply.status(StatusCodeEnum.SUCCESS).header('Content-Type', 'application/json; charset=utf-8').send({
      message: 'Success message',
      data: {
      },
    });
  } catch (error) {
    logger.error(error);
    reply.status(StatusCodeEnum.ERROR).header('Content-Type', 'application/json; charset=utf-8').send({
      message: 'Error message',
      data: {
        error,
      },
    });
  }
};
