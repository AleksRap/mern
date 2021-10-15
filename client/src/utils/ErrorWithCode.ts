import { ErrorWithCodeType } from '@types';

export class ErrorWithCode extends Error {
  name: string;
  message: string;
  code: number;

  constructor(obj: ErrorWithCodeType) {
    super();

    this.name = obj.name;
    this.message = obj.message;
    this.code = obj.code;
  }
}
