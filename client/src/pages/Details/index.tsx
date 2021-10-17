import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DetailsLink } from '@types';
import { linksGetLinkInfo } from '@store/links/actionCreators';
import { LinkCard } from '@components';
import { useShallowSelector } from '@hooks';
import { linksSelectors } from '@store/links/selectors';

export const Details: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<DetailsLink>();

  const link = useShallowSelector(linksSelectors.getProp('link'));

  useEffect(() => {
    if (id) dispatch(linksGetLinkInfo({ id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return link && <LinkCard link={link} />;
};
