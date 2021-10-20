import React, { FC, useCallback } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NAVBAR_LINKS } from '@constants';
import { Text } from '@components/Typography';
import { Button } from '@components/Button';
import { authSignOut } from '@store/auth/actionCreators';
import styles from './styles.module.scss';

type Props = {
  isShow: boolean,
  onClick: () => void,
  className?: string,
}

export const MenuList: FC<Props> = ({
  isShow,
  onClick,
  className,
}) => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    onClick();
    dispatch(authSignOut());
  }, [dispatch, onClick]);

  return (
    <nav
      className={cx(
        styles.nav,
        isShow && styles.active,
        className
      )}
    >
      <ul className={styles.list}>
        {NAVBAR_LINKS.map(({ name, link }) => (
          <li key={link} className={styles.item} onClick={onClick}>
            <NavLink
              to={link}
              activeClassName={styles.activeLink}
              className={styles.link}
            >
              <Text
                tag="span"
              >
                {name}
              </Text>
            </NavLink>
          </li>
        ))}
        <li className={styles.item}>
          <Button
            onClick={handleLogout}
            size="small"
            className={styles.btn}
          >
            Logout
          </Button>
        </li>
      </ul>
    </nav>
  );
}
