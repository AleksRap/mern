import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Button, Input } from '@components';
import { ERRORS } from '@constants';
import { linksGenerateLink } from '@store/links/actionCreators';
import styles from './styles.module.scss';

type InitialValues = {
  link: string,
};

const initialValues: InitialValues = {
  link: '',
};

const validationSchema = object().shape({
  link: string().required(ERRORS.required),
});

export const Create: FC = () => {
  const dispatch = useDispatch();

  const {
    values,
    handleChange,
    handleSubmit,
  } = useFormik<InitialValues>({
    initialValues,
    validationSchema,
    onSubmit: (obj) => {
      dispatch(linksGenerateLink(obj));
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <Input
        name="link"
        placeholder="Вставьте ссылку"
        value={values.link}
        onChange={handleChange}
      />
      <Button
        type="submit"
        color="secondary"
        className={styles.btn}
      >
        Сократить ссылку
      </Button>
    </form>
  );
};
