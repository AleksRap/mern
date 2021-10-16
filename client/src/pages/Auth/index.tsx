import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { H1, Button, Input } from '@components';
import { routes } from '@constants';
import styles from './styles.module.scss';

export const Auth: FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleRegistration = useCallback(() => {
    history.push(routes.registration.root);
  }, [history]);

  return (
    <div>
      <H1 align="center">
        Сократи ссылку
      </H1>

      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <Input
          label="Логин или email"
          positionLabel="top"
          name="loginOrEmail"
        />

        <Input
          label="Пароль"
          positionLabel="top"
          name="password"
        />

        <div className={styles.btns}>
          <Button
            type="submit"
            color="secondary"
            isFullWidth
          >
            Войти
          </Button>
          <Button
            color="error"
            onClick={handleRegistration}
            isFullWidth
          >
            Регистрация
          </Button>
        </div>
      </form>
    </div>
  );
};
