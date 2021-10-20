import React, { FC, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '@constants';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Routes } from '@containers';
import { authSignOut } from '@store/auth/actionCreators';
import { Button, Navbar, Text } from '@components';
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
    <>
      <header className={styles.header}>
        <NavLink
          to={routes.create.root}
          className={styles.logo}
        >
          <Text
            tag="span"
            size="xl"
            className={styles.logoText}
          >
            Сокращение ссылок
          </Text>
        </NavLink>

        {isAuth && (
          <>
            <Navbar className={styles.navbar} />

            <Button
              onClick={handleLogout}
              size="small"
            >
              Logout
            </Button>
          </>

        )}
      </header>

      <div className={styles.container}>
        <main className={styles.main}>
          <Routes />
        </main>
        <ToastContainer hideProgressBar position="top-center" />
      </div>
    </>
  );
}
