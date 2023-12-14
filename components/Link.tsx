'use client';

import Link from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

const CustomLink = ({
  href,
  ...rest
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  const linkClasses = 'underline-magical';

  if (isInternalLink) {
    return (
      <Link href={href} legacyBehavior>
        <Link href={href} className={linkClasses} {...rest}></Link>
      </Link>
    );
  }

  if (isAnchorLink) {
    return <Link href={href} {...rest} />;
  }

  return <Link className={linkClasses} target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;
