/* eslint-disable react/display-name */
import { coreContent } from '@/lib/utils/contentlayer';
import type { Authors, Blog } from 'contentlayer/generated';
import type { MDXComponents as MDXComponentsType } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from './Image';
import LinkButton from './LinkButton';
import Pre from './Pre';
import TOCInline from './TOCInline';

interface MDXLayout {
  content: Blog | Authors;
  [key: string]: unknown;
}

export const components: MDXComponentsType = {
  Image,
  TOCInline,
  a: ({ href, children, ...rest }) => {
    const isAnchorLink = href?.startsWith('#');
    const linkClasses = 'underline-magical';

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
  },
  pre: Pre,
  LinkButton,
};

export const MDXLayoutRenderer = ({ content, ...rest }: MDXLayout) => {
  const MDXLayout = useMDXComponent(content.body.code);
  const mainContent = coreContent(content);

  return <MDXLayout content={mainContent} components={components} {...rest} />;
};
