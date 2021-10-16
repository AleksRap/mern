import React, { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import { ButtonColor, ButtonSize, IconName } from '@types';
import { Icon } from '@components';
import styles from './styles.module.scss';

type Props = {
  type?: 'button' | 'submit',
  disabled?: boolean,
  color?: ButtonColor,
  size?: ButtonSize,
  isFullWidth?: boolean,
  onClick?: (event: React.MouseEvent) => void,
  className?: string,
  icon?: IconName,
  classNameIcon?: string,
};

export const Button: FC<PropsWithChildren<Props>> = ({
  type = 'button',
  disabled,
  color = 'primary',
  size = 'normal',
  isFullWidth = false,
  onClick = () => {},
  className,
  icon,
  classNameIcon,
  children,
}) => (
  <button
    type={type}
    className={cx(
      styles.button,
      styles[`size_${size}`],
      styles[`color_${color}`],
      isFullWidth && [styles.isFullWidth],
      className,
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {icon && (
      <Icon
        value={icon}
        className={classNameIcon}
      />
    )}
    {children}
  </button>
);
