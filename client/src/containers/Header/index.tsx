import React, { FC, useCallback } from 'react';
import { Button, Logo, Navbar, MenuList } from '@components';
import { useDispatch } from 'react-redux';
import { useDisplay, useShallowSelector } from '@hooks';
import { authSelectors } from '@store/auth/selectors';
import { authSignOut } from '@store/auth/actionCreators';
import styles from './styles.module.scss';

export const Header: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useShallowSelector(authSelectors.getAuth);

  const handleLogout = useCallback(() => {
    dispatch(authSignOut());
  }, [dispatch]);

  const {
    isShow,
    handleToggle,
    handleClose,
  } = useDisplay();

  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />

      {isAuth && (
        <>
          <Navbar className={styles.navbar} />

          <Button
            onClick={handleLogout}
            size="small"
            className={styles.btnLogout}
          >
            Logout
          </Button>

          <Button
            color="transparent"
            onClick={handleToggle}
            icon="menu"
            className={styles.btnMenu}
          />

          <MenuList
            isShow={isShow}
            onClick={handleClose}
          />
        </>
      )}
    </header>
  );
}
