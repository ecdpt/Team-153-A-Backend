import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Response } from 'express';
import { User } from '../../model/user.entity';
import { GqlExecutionContext } from '@nestjs/graphql';

/*export const ResGql = createParamDecorator(
  (data, [root, args, ctx, info]): Response => ctx.res,
);*/

export const ResGql = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().res //req.user;
  },
);

export const GqlUser = createParamDecorator(
  (data, [root, args, ctx, info]): User => ctx.req && ctx.req.user,
);