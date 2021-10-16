import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes } from '@containers';
import { H1 } from '@components';
import styles from './styles.module.scss';

export const App: FC = () => (
  <div className={styles.container}>
    <H1 align="center">
      Сократи ссылку
    </H1>

    <Routes />
    <ToastContainer hideProgressBar position="top-center" />
  </div>
);
