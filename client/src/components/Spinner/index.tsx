import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type Props = {
  isShow?: boolean,
  className?: string,
};

export const Spinner: FC<Props> = ({
  isShow,
  className,
}) => (
  <>
    {isShow && (
      <span
        className={cx(
          styles.spinner,
          className,
        )}
      />
    )}
  </>
);
