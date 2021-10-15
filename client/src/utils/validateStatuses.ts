import { validStatuses, errorStatuses } from '@constants';

export const validateStatus = (status: number) =>
  [...validStatuses, ...errorStatuses].includes(status);
