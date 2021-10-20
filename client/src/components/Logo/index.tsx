import React, { FC } from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import { routes } from '@constants';
import { Text } from '@components/Typography';
import styles from './styles.module.scss';

type Props = {
  className?: string,
}

export const Logo: FC<Props> = ({
  className,
}) => (
  <NavLink
    to={routes.create.root}
    className={cx(styles.logo, className)}
  >
    <Text
      tag="span"
      size="xl"
      className={styles.text}
    >
      Сокращение ссылок
    </Text>
  </NavLink>
);
