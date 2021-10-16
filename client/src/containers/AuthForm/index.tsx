import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Button, Input } from '@components';
import { routes, ERRORS, Validations } from '@constants';
import { authSignIn, authSignUp } from '@store/auth/actionCreators';
import styles from './styles.module.scss';

type InitialValues = {
  login: string,
  email: string,
  loginOrEmail: string,
  password: string,
};

const initialValues: InitialValues = {
  login: '',
  email: '',
  loginOrEmail: '',
  password: '',
};

const validationSchema = object().shape({
  login: string()
    .required(ERRORS.required)
    .min(
      Validations.loginOrEmailMinLength,
      ERRORS.minLength(Validations.loginOrEmailMinLength)
    ),
  email: string()
    .required(ERRORS.required)
    .email(ERRORS.email),
  loginOrEmail: string()
    .required(ERRORS.required)
    .min(
      Validations.loginOrEmailMinLength,
      ERRORS.minLength(Validations.loginOrEmailMinLength)
    ),
  password: string()
    .required(ERRORS.required)
    .min(
      Validations.passMinLength,
      ERRORS.minLength(Validations.passMinLength)
    ),
});

type Props = {
  type: 'register' | 'login'
}

export const AuthForm: FC<Props> = ({
 type,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    values,
    handleChange,
    handleSubmit,
    touched,
    errors,
  } = useFormik<InitialValues>({
    initialValues,
    validationSchema,
    onSubmit: (obj) => {
      const { login, email, loginOrEmail, password } = obj

      if (type === 'register') {
        dispatch(authSignUp({
          login,
          email,
          password
        }));
      }

      if (type === 'login') {
        dispatch(authSignIn({
          loginOrEmail,
          password,
        }));
      }
    },
  });

  const handleRedirect = useCallback(() => {
    history.push(type === 'register' ? routes.auth.root : routes.registration.root);
  }, [history, type]);

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
      {type === 'register' && (
        <>
          <Input
            value={values.login}
            onChange={handleChange}
            label="Логин"
            placeholder="Введите логин"
            positionLabel="top"
            name="login"
            error={'login' in errors && 'login' in touched && errors.login}
          />

          <Input
            value={values.email}
            onChange={handleChange}
            label="Email"
            placeholder="Введите email"
            positionLabel="top"
            name="email"
            error={'email' in errors && 'email' in touched && errors.email}
          />
        </>
      )}

      {type === 'login' && (
        <Input
          value={values.loginOrEmail}
          onChange={handleChange}
          label="Логин или email"
          placeholder="Введите логин или email"
          positionLabel="top"
          name="loginOrEmail"
          error={'loginOrEmail' in errors && 'loginOrEmail' in touched && errors.loginOrEmail}
        />
      )}

      <Input
        value={values.password}
        onChange={handleChange}
        label="Пароль"
        placeholder="Введите пароль"
        positionLabel="top"
        name="password"
        error={'password' in errors && 'password' in touched && errors.password}
      />

      <div className={styles.btns}>
        <Button
          type="submit"
          color="secondary"
          isFullWidth
        >
          {type === 'register' ? 'Зарегистрироваться' : 'Войти'}
        </Button>
        <Button
          color="error"
          onClick={handleRedirect}
          isFullWidth
        >
          {type === 'register' ? 'Авторизация' : 'Регистрация'}
        </Button>
      </div>
    </form>
  );
};
