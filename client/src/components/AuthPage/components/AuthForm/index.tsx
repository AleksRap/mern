import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Button, Input } from '@components';
import { routes, ERRORS, Validations } from '@constants';
import { history } from '@utils';
import { authSignIn, authSignUp } from '@store/auth/actionCreators';
import { AuthFormType } from '@types';
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

const validationObjCommon = {
  password: string()
    .required(ERRORS.required)
    .min(
      Validations.passMinLength,
      ERRORS.minLength(Validations.passMinLength)
    ),
};

const validationSchemaLogin = object().shape({
  ...validationObjCommon,
  loginOrEmail: string()
    .required(ERRORS.required)
    .min(
      Validations.loginOrEmailMinLength,
      ERRORS.minLength(Validations.loginOrEmailMinLength)
    ),
});

const validationSchemaRegister = object().shape({
  ...validationObjCommon,
  login: string()
    .required(ERRORS.required)
    .min(
      Validations.loginOrEmailMinLength,
      ERRORS.minLength(Validations.loginOrEmailMinLength)
    ),
  email: string()
    .required(ERRORS.required)
    .email(ERRORS.email),
});

type Props = {
  type: AuthFormType,
}

export const AuthForm: FC<Props> = ({
 type,
}) => {
  const dispatch = useDispatch();

  const {
    values,
    handleChange,
    handleSubmit,
    touched,
    errors,
  } = useFormik<InitialValues>({
    initialValues,
    validationSchema: type === 'register' ? validationSchemaRegister : validationSchemaLogin,
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
  }, [type]);

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
            autoComplete="off"
            error={'login' in errors && 'login' in touched && errors.login}
          />

          <Input
            value={values.email}
            onChange={handleChange}
            label="Email"
            placeholder="Введите email"
            positionLabel="top"
            name="email"
            autoComplete="off"
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
          autoComplete="off"
          error={'loginOrEmail' in errors && 'loginOrEmail' in touched && errors.loginOrEmail}
        />
      )}

      <Input
        value={values.password}
        onChange={handleChange}
        type="password"
        label="Пароль"
        placeholder="Введите пароль"
        positionLabel="top"
        name="password"
        autoComplete="off"
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
