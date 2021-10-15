import React, { FC } from 'react';
import cx from 'classnames';
import { Icon, Text } from '@components';
import { ToastifyProps, IconName } from '@types';
import './styles.scss';
import styles from './styles.module.scss';

type Props = ToastifyProps & {
  className?: string,
};

const icons: Record<ToastifyProps['type'], IconName> = {
  success: 'checkmark',
  error: 'cross',
  info: 'warning',
};

export const Toastify: FC<Props> = ({
  type,
  title,
  message,
  className,
}) => (
  <div className={cx(styles.toastify, styles[type], className)}>
    <Icon value={icons[type]} className={styles.icon} />
    <div className={styles.body}>
      <Text
        weight="medium"
        className={styles.title}
      >
        {title}
        !
      </Text>
      <Text
        color="primary"
        className={styles.message}
      >
        {message}
      </Text>
    </div>
  </div>
);
