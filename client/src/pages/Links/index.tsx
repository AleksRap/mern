import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { linksGetLinks, linksSetState } from '@store/links/actionCreators';
import { useShallowSelector } from '@hooks';
import { linksSelectors } from '@store/links/selectors';
import { LinkList } from '@components';

export const Links: FC = () => {
  const dispatch = useDispatch();
  const links = useShallowSelector(linksSelectors.getProp('links'))

  useEffect(() => {
    dispatch(linksGetLinks());

    return () => { dispatch(linksSetState({ links: [] })) };
  }, [dispatch]);

  return <LinkList links={links} />;
};
