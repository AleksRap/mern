import {
  FC,
  PropsWithChildren,
  createElement,
  CSSProperties,
} from 'react';
import cx from 'classnames';
import {
  TextAlign as Align,
  TextColor as Color,
  TextSize as Size,
  TextWeight as Weight,
  DecorationType as Decoration,
  TransformType as Transform,
} from '@types';

import styles from './styles.module.scss';

type Tag = 'p' | 'span';

type Props = {
  tag?: Tag,
  className?: string,
  style?: CSSProperties,
  size?: Size,
  color?: Color,
  align?: Align,
  decoration?: Decoration,
  transform?: Transform,
  weight?: Weight,
};

export const Text: FC<PropsWithChildren<Props>> = ({
  tag = 'p',
  children,
  className,
  style = { },
  size = 's',
  color = 'basic',
  align = 'left',
  transform = 'none',
  decoration = 'none',
  weight = 'normal',
}) => (
  createElement(
    tag,
    {
      style,
      className: cx(
        styles[`size_${size}`],
        styles[`color_${color}`],
        styles[`align_${align}`],
        styles[`weight_${weight}`],
        styles[`decoration_${decoration}`],
        styles[`transform_${transform}`],
        className,
      ),
    },
    children,
  )
);
