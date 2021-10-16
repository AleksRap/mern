import React, { FC } from 'react';
import { H3 } from '@components';
import { AuthForm } from '@containers';

export const Auth: FC = () => (
  <div>
    <H3 align="center">
      Авторизация
    </H3>

    <AuthForm type="login" />
  </div>
);
