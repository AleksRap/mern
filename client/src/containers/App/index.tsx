import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes } from '@containers';
import styles from './styles.module.scss';

export const App: FC = () => (
  <div className={styles.container}>
    <Routes />
    <ToastContainer hideProgressBar position="top-center" />
  </div>
);
