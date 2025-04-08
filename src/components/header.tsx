import { env } from '@/utils/env';
import { useTranslations } from 'next-intl';

import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  const t = useTranslations();
  return (
    <header className="mx-auto max-w-2xl text-center items-center justify-center mt-10">
      <div className='flex items-center justify-center '>
        <Link href={env.SOZLER_KOSKU_SITE_URL} target='_blank'>
        <Image src="/images/sozler-kosku-logo.png" alt={t('Home.Title')} width={130} height={130} className='drop-shadow-md rounded-full p-0 m-0' />
        </Link>
      </div>
      <div className="my-8"><h1 className="text-2xl font-bold text-white text-shadow-xs">{t('Home.Title')}</h1></div>
    </header>
  );
};