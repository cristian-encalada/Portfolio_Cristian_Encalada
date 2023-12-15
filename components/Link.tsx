'use client';

import Link from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';


type CustomLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string;
  children: ReactNode;
};

const CustomLink = ({ href, children, ...rest }: CustomLinkProps) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  const linkClasses = 'underline-magical';

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a className={linkClasses} {...rest}>
          {children}
        </a>
      </Link>
    );
  }

  if (isAnchorLink) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a className={linkClasses} target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  );
};

export default CustomLink;
