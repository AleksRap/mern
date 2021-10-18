import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DetailsLink } from '@types';
import { linksGetLinkInfo, linksSetState } from '@store/links/actionCreators';
import { LinkCard, Spinner } from '@components';
import { useShallowSelector } from '@hooks';
import { linksSelectors } from '@store/links/selectors';

export const Details: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<DetailsLink>();

  const link = useShallowSelector(linksSelectors.getProp('link'));

  useEffect(() => {
    if (id) dispatch(linksGetLinkInfo({ id }));

    return () => { dispatch(linksSetState({ link: null })) };
  }, [id, dispatch]);

  return (
    <>
      {link && <LinkCard link={link} />}
      <Spinner isShow={!link} />
    </>
  );
};
