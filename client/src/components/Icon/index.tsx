import React, { FC, CSSProperties } from 'react';
import cx from 'classnames';
import { IconName } from '@types';

type Props = {
  className?: string,
  value: IconName,
  style?: CSSProperties,
};

export const Icon: FC<Props> = ({
  className,
  value,
  style
}) => (
  <i
    className={cx(
      `icon-${value}`,
      className
    )}
    style={style}
  />
);
