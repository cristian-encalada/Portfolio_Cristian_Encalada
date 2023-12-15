'use client';

import Link from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type CustomLinkProps = {
  href: string;
  children: ReactNode;
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const CustomLink = ({ href, children, ...rest }: CustomLinkProps) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  const linkClasses = 'underline-magical';

  if (isInternalLink) {
    return (
      <Link href={href || '/'} passHref>
        <a className={linkClasses} {...rest}>
          {children}
        </a>
      </Link>
    );
  }

  if (isAnchorLink) {
    return (
      <a href={href || '#'} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a
      className={linkClasses}
      target="_blank"
      rel="noopener noreferrer"
      href={href || '#'} // or provide a default value as needed
      {...rest}
    >
      {children}
    </a>
  );
};

export default CustomLink;
