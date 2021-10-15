import { HeadersDefaults } from 'axios';

export type ExtendHeaders = {
  Authorization?: string,
} & HeadersDefaults;

export type ResponseData = {
  token?: string
  message?: string,
  error?: string
};
