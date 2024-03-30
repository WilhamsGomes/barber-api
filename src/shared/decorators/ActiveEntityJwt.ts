import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const ActiveEntityId = createParamDecorator<undefined>(
  (data, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    return request.entity;
  },
);
