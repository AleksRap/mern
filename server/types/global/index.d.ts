declare module '*.json' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}

declare module 'http' {
  interface IncomingHttpHeaders {
    authorization: string,
  }
}
