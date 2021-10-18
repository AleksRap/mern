import React, { FC } from 'react';
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
    <table className={className}>
      <thead>
      <tr>
        <th>№</th>
        <th>Оригинальная</th>
        <th>Сокращенная</th>
        <th>Инфо</th>
      </tr>
      </thead>
      <tbody>
        {links.map(({ from, to, _id }, index) => (
          <tr key={_id}>
            <td>{index + 1}</td>
            <td>
              <a
                href={to}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                {to}
              </a>
            </td>
            <td>
              <a
                href={from}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                {from}
              </a>
            </td>
            <td>
              <Link
                to={`${routes.details.link}/${_id}`}
                className={styles.link}
              >
                <Text tag="span">Подробнее</Text>
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
