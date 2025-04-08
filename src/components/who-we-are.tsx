'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export const WhoWeAre = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  const t = useTranslations();

  return (
    <>
      <div
        onClick={toggleMenu}
        className="mt-10 mb-2 shadow bg-white hover:bg-gray-200 transition duration-300 w-full p-4 rounded-full font-bold text-center cursor-pointer"
      >
        {t('WhoWeAre.Title')}
      </div>
      <div
        className={`w-5xl ${isOpen ? 'block' : 'hidden'} bg-white p-4 rounded-3xl shadow-lg`}
      >
        {t.rich('WhoWeAre.Content', {
          h2: (chunks) => <h2 className="font-bold block text-lg">{chunks}</h2>,
          h3: (chunks) => <h3 className="font-bold block text-lg">{chunks}</h3>,
          p: (chunks) => <p className="mb-4">{chunks}</p>,
          b: (chunks) => <b className="font-semibold">{chunks}</b>,
        })}
      </div>
    </>
  );
};
