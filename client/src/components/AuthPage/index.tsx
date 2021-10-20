import React, { FC } from 'react';
import cx from 'classnames';
import { H3 } from '@components';
import { AuthForm } from '@containers';
import { AuthFormType } from '@types';
import styles from './styles.module.scss';

type Prop = {
  type: AuthFormType,
  className?: string,
}

export const AuthPage: FC<Prop> = ({
  type,
  className,
}) => (
  <div className={cx(styles.wrap, className)}>
    <H3 align="center">
      {type === 'register' ? 'Регистрация' : 'Авторизация'}
    </H3>

    <AuthForm type={type} />
  </div>
);
