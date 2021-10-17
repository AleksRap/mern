export type Link = {
  code: string,
  to: string,
  from: string,
  owner: string,
  clicks: number,
  date: Date,
};

export type LinksState = {
  links: Link[],
  link: Link | null,
};

export type LinksGetLinksRes = {
  links: Link[]
}

export type LinksGenerateLink = {
  link: string,
}

export type LinksGenerateLinkRes = {
  link: {
    _id: string,
  } & Link,
}

export type LinksGetLinkInfo = {
  id: string,
}

export type LinksGetLinkInfoRes = {
  link: Link,
}
