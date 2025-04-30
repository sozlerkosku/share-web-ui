import { useTranslations } from 'next-intl';

import { SocialButton } from '@/components/social-button';
import { WhoWeAre } from '@/components/who-we-are';

export default function Page() {
  const t = useTranslations();
  return (
    <section>
      <div className=" w-xs mx-auto text-center items-center justify-center">
        <SocialButton
          text={t('SocialMedia.Youtube.Title')}
          link={t('SocialMedia.Youtube.URL')}
          visible={t('SocialMedia.Youtube.Visible')}
        />
        <SocialButton
          text={t('SocialMedia.Instagram.Title')}
          link={t('SocialMedia.Instagram.URL')}
          visible={t('SocialMedia.Instagram.Visible')}
        />
        <SocialButton
          text={t('SocialMedia.Telegram.Title')}
          link={t('SocialMedia.Telegram.URL')}
          visible={t('SocialMedia.Telegram.Visible')}
        />
        <SocialButton
          text={t('SocialMedia.TikTok.Title')}
          link={t('SocialMedia.TikTok.URL')}
          visible={t('SocialMedia.TikTok.Visible')}
        />
        <SocialButton
          text={t('SocialMedia.Spotify.Title')}
          link={t('SocialMedia.Spotify.URL')}
          visible={t('SocialMedia.Spotify.Visible')}
        />
        <SocialButton
          text={t('SocialMedia.Patreon.Title')}
          link={t('SocialMedia.Patreon.URL')}
          visible={t('SocialMedia.Patreon.Visible')}
        />
      </div>
      <div className="mx-auto ">
        <WhoWeAre />
      </div>
    </section>
  );
}
