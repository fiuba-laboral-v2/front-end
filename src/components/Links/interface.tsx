export interface ILink {
  name: string;
  href: string;
}

export interface ILinksProps {
  links: ILink[];
  className?: string;
}
