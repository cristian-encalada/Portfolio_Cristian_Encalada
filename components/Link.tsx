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
  const isInternalLink = href?.startsWith('/');
  const isAnchorLink = href?.startsWith('#');
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

  const externalLinkProps = isAnchorLink
    ? { href, ...rest }
    : {
        className: linkClasses,
        target: '_blank',
        rel: 'noopener noreferrer',
        href,
        ...rest,
      };

  return <a {...externalLinkProps}>{children}</a>;
};

export default CustomLink;
