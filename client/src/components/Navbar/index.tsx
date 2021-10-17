import React, { FC } from 'react';
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
    <nav className={className}>
      <ul className={styles.list}>
        {NAVBAR_LINKS.map(({ name, link }) => (
          <li>
            <NavLink
              to={link}
              activeClassName={styles.activeLink}
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
