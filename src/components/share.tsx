'use client';

import { useTranslations } from 'next-intl';
import { Dialog } from 'radix-ui';
import {
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';

import { BiCheckDouble, BiCopy, BiShare } from 'react-icons/bi';
import { PUBLIC_SITE_URL } from '@/utils/constants';
import { useState } from 'react';

export const Share = () => {
  const t = useTranslations();

  const [isCopied, setCopied] = useState(false);

  const copyToClipboard = () => {
    setCopied(!isCopied);
    navigator.clipboard.writeText(PUBLIC_SITE_URL);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="absolute right-10 top-10 cursor-pointer border-2 border-white text-white rounded-full bg-orange-500 hover:bg-orange-600">
          <BiShare className="w-14 h-14 p-4" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content bg-white dark:bg-gray-900 fixed top-[50%] left-[50%] w-[90vw] max-w-[350px] translate-x-[-50%] translate-y-[-50%] rounded-md shadow-lg p-6 focus:outline-none">
          <Dialog.Title className="text-center text-2xl font-bold text-gray-900 dark:text-gray-200 mb-10">
            {t('Share.Title')}
          </Dialog.Title>
          <div className="flex flex-col items-center justify-center gap-8 mb-10 w-full">
            <TelegramShareButton
              url={PUBLIC_SITE_URL}
              title={t('Share.TelegramText')}
            >
              <div className="flex items-center gap-2">
                <TelegramIcon size={32} round />
                {t('Share.Telegram')}
              </div>
            </TelegramShareButton>

            <WhatsappShareButton
              url={PUBLIC_SITE_URL}
              title={t('Share.WhatsappText')}
              separator=":: "
            >
              <div className="flex items-center gap-2">
                <WhatsappIcon size={32} round />
                {t('Share.Whatsapp')}
              </div>
            </WhatsappShareButton>

            <button
              onClick={copyToClipboard}
              className="rounded-full text-black bg-gray-200 hover:bg-orange-600 hover:text-white cursor-pointer"
            >
              <div className="flex items-center gap-2 px-6 text-sm">
                {isCopied ? (
                  <BiCheckDouble className="w-12 h-12 p-2" />
                ) : (
                  <BiCopy className="w-12 h-12 p-2" />
                )}
                <div>
                  {isCopied ? t('Share.LinkCopied') : t('Share.CopyLink')}
                </div>
              </div>
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
