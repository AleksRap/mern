import { HeadersDefaults } from 'axios';

export type ExtendHeaders = {
  authorization?: string,
} & HeadersDefaults;

export type ResponseData = {
  token?: string
  message?: string,
  error?: string
};
