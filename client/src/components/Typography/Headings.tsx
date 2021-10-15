import React, { ReactNode } from 'react';
import cx from 'classnames';
import {
  HeadingType,
  TextAlign as Align,
  TextColor as Color,
  TextWeight as Weight,
} from '@types';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode,
  align?: Align,
  color?: Color,
  className?: string,
  weight?: Weight,
};

const createHeading = (type: HeadingType) => ({
  children,
  className = '',
  align = 'left',
  color = 'primary',
  weight = 'medium',
  ...rest
}: Props) => {
  const hProps = {
    className: cx(
      styles[`type_${type}`],
      styles[`color_${color}`],
      styles[`weight_${weight}`],
      styles[`align_${align}`],
      className,
    ),
    children,
    ...rest,
  };

  return React.createElement(type, hProps, children);
};

export const H1 = createHeading('h1');
export const H2 = createHeading('h2');
export const H3 = createHeading('h3');
export const H4 = createHeading('h4');
export const H5 = createHeading('h5');
