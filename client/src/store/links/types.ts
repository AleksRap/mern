export type Link = {
  code: string,
  to: string,
  from: string,
  owner: string,
  clicks: number,
  date: Date,
  _id: string,
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
  link: Link,
}

export type LinksGetLinkInfo = {
  id: string,
}

export type LinksGetLinkInfoRes = {
  link: Link,
}
