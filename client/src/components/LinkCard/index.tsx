import React, { FC } from 'react';
import { Link } from '@types';
import { Text, H2 } from '@components/Typography';
import styles from './styles.module.scss';

type Props = {
  link: Link,
  className?: string,
}

export const LinkCard: FC<Props> = ({
  link,
  className,
}) => (
  <div className={className}>
    <H2 className={styles.title}>Ссылка</H2>

    <Text>
      Ваша ссылка:
      {' '}
      <a href={link.from} target="_blank" rel="noreferrer">{link.from}</a>
    </Text>

    <Text>
      Куда:
      {' '}
      <a href={link.to} target="_blank" rel="noreferrer">{link.to}</a>
    </Text>

    <Text>
      Количество кликов по ссылке:
      {' '}
      <strong>{link.clicks}</strong>
    </Text>

    <Text>
      Дата создания:
      {' '}
      <strong>{new Date(link.date).toLocaleDateString()}</strong>
    </Text>
  </div>
);
