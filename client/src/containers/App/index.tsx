import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes } from '@containers';

export const App: FC = () => (
  <>
    <Routes />
    <ToastContainer hideProgressBar position="top-center" />
  </>
);
