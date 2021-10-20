import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Header, Routes } from '@containers';
import styles from './styles.module.scss';

export const App: FC = () => {


  return (
    <div className={styles.wrap}>
      <Header />

      <div className={styles.container}>
        <Routes />
      </div>

      <ToastContainer hideProgressBar position="top-center" />
    </div>
  );
}
