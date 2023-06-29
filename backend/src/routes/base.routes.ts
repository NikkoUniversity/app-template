import { FastifyInstance } from 'fastify';

const userRouter = (fastify: FastifyInstance, opts: any, next: (err?: Error) => void) => {
  fastify.post('/', {});

  next();
};

export default userRouter;
