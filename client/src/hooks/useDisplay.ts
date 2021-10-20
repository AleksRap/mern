import { useState, useCallback } from 'react';

export const useDisplay = (defaultState: boolean = false) => {
  const [isShow, setShow] = useState<boolean>(defaultState);

  const handleOpen = useCallback(() => {
    setShow(true);
  }, []);

  const handleClose = useCallback(() => {
    setShow(false);
  }, []);

  const handleToggle = useCallback(() => {
    setShow((state) => !state);
  }, []);

  return {
    isShow,
    handleOpen,
    handleClose,
    handleToggle,
  }
};
