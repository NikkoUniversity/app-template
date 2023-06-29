import fastify from 'fastify';
import cors from '@fastify/cors';
import type { FastifyCookieOptions } from '@fastify/cookie';
import cookie from '@fastify/cookie';

import { COOKIE_SECRET, SERVER_HOST, SERVER_PORT } from './configs/config';
import { logger } from './logs/logger';
import baseRouter from './routes/base.routes';

const server = fastify();

(async () => {
  try {
    await server.register(cookie, {
      secret: COOKIE_SECRET,
      parseOptions: {},
    } as FastifyCookieOptions);

    await server.register(cors, {
      origin: (origin, callback) => {
        callback(null, true);
      },
    });

    await server.register(baseRouter, {
      prefix: '/api/base',
    });

    await server.ready().then(() => {
      logger.info('Successfully booted!');
    }, (err) => {
      logger.error('an error happened', err);
    });

    await server.ready();

    server.listen({
      port: Number(SERVER_PORT),
      host: SERVER_HOST,
    }, (err) => {
      if (err) {
        logger.error(err?.stack);
      }
      logger.info(`Server started at http://${SERVER_HOST}:${SERVER_PORT}`);
    });
  } catch (error) {
    logger.error(`Unable to connect the server: ${error}`);

    throw new Error(error as string);
  }
})();
