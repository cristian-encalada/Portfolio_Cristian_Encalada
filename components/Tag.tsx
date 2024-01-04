import kebabCase from '@/lib/utils/kebabCase';
import Link from 'next/link';

interface Props {
  text: string;
}

export default function Tag({ text }: Props) {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="rounded-md bg-primary-400 p-1 px-3 text-xs uppercase text-white duration-300 hover:bg-primary-300 active:bg-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  );
}
