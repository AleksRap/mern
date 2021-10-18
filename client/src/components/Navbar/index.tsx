import React, { FC } from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import { NAVBAR_LINKS } from '@constants';
import { Text } from '@components/Typography';
import styles from './styles.module.scss';

type Props = {
  className?: string,
}

export const Navbar: FC<Props> = ({
  className,
}) => {

  return (
    <nav className={cx(styles.nav, className)}>
      <ul className={styles.list}>
        {NAVBAR_LINKS.map(({ name, link }) => (
          <li key={link} className={styles.item}>
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
      </ul>
    </nav>
  );
};
