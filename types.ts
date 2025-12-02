export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceCardProps {
  image: string;
  title: string;
}

export interface FooterLinkGroup {
  title: string;
  links: string[];
}