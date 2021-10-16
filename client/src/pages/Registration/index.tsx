import React, { FC } from 'react';
import { H3 } from '@components';
import { AuthForm } from '@containers';

export const Registration: FC = () => {
  return (
    <div>
      <H3 align="center">
        Регистрация
      </H3>

      <AuthForm type="register" />
    </div>
  );
};
