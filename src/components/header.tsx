import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { LocaleSwitcher } from '@/components/locale-switcher';
import { env } from '@/utils/env';

export const Header = () => {
  const t = useTranslations();
  return (
    <header className="mx-auto max-w-2xl text-center items-center justify-center mt-6">
      <div className="flex items-center justify-center ">
        <Link href={env.SOZLER_KOSKU_SITE_URL} target="_blank">
          <Image
            src="/images/sozler-kosku-logo.png"
            alt={t('Home.Title')}
            width={100}
            height={100}
            className="drop-shadow-md rounded-full p-0 m-0"
          />
        </Link>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-white text-shadow-xs">
          {t('Home.Title')}
        </h1>
      </div>
      <div className="mt-3 mb-6">
        <LocaleSwitcher />
      </div>
    </header>
  );
};
