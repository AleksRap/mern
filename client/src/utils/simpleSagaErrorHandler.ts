import { setNotification } from '@utils';
import { ErrorWithCodeType } from '@types';

export function simpleSagaErrorHandler(err: ErrorWithCodeType) {
  setNotification({
    type: 'error',
    title: err.name,
    message: err.message,
  });
}
