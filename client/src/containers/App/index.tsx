import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Routes } from '@containers';
import { authSignOut } from '@store/auth/actionCreators';
import { Button, H1, Navbar } from '@components';
import { useShallowSelector } from '@hooks';
import { authSelectors } from '@store/auth/selectors';
import styles from './styles.module.scss';

export const App: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useShallowSelector(authSelectors.getAuth);

  const handleLogout = useCallback(() => {
    dispatch(authSignOut());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <H1 align="center">
          Сократи ссылку
        </H1>

        {isAuth && (
          <>
            <Navbar className={styles.navbar} />

            <Button
              onClick={handleLogout}
              size="small"
              className={styles.btn}
            >
              Logout
            </Button>
          </>

        )}
      </header>

      <Routes />
      <ToastContainer hideProgressBar position="top-center" />
    </div>
  );
}
