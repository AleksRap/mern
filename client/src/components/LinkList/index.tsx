import React, { FC } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Link as LinkType } from '@types';
import { Text } from '@components/Typography';
import { routes } from '@constants';
import styles from './styles.module.scss';

type Props = {
  links: LinkType[],
  className?: string,
}

export const LinkList: FC<Props> = ({
  links,
  className,
}) => links.length
  ? (
    <table className={cx(styles.table, className)}>
      <thead>
      <tr className={styles.tr}>
        <th className={styles.th}>№</th>
        <th className={styles.th}>Оригинальная</th>
        <th className={styles.th}>Сокращенная</th>
        <th className={styles.th}>Инфо</th>
      </tr>
      </thead>
      <tbody>
        {links.map(({ from, to, _id }, index) => (
          <tr key={_id} className={styles.tr}>
            <td className={styles.td}>{index + 1}</td>
            <td className={styles.td}>
              <a
                href={to}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                {to}
              </a>
            </td>
            <td className={styles.td}>
              <a
                href={from}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                {from}
              </a>
            </td>
            <td className={styles.td}>
              <Link
                to={`${routes.details.link}/${_id}`}
                className={styles.link}
              >
                <Text tag="span" className={styles.text}>Подробнее</Text>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
  : (
    <Text>Ссылок нет</Text>
  );
