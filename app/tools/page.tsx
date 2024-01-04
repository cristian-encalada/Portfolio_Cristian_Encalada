import { MDXLayoutRenderer } from '@/components/MDXComponents';
import ToolsLayout from '@/layouts/MDX/ToolsLayout';
import MainLayout from '@/layouts/MainLayout';
import { allAuthors } from 'contentlayer/generated';

export const metadata = {
  title: 'Tools - Cristian Encalada',
  description: 'Tools I Use - Cristian Encalada',
};

export default function Tools() {
  const author = allAuthors.find((p) => p.slug === 'tools');

  if (!author) {
    return null;
  }

  return (
    <MainLayout>
      <ToolsLayout>
        <MDXLayoutRenderer content={author} />
      </ToolsLayout>
    </MainLayout>
  );
}