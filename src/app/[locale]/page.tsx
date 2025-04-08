import { SocialButton } from "@/components/social-button";
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations();
  return (
    <section>
      <div className=" w-xs mx-auto text-center items-center justify-center"> 
      <SocialButton text={t("SocialMedia.Youtube.Title")} link={t("SocialMedia.Youtube.URL")} />
      <SocialButton text={t("SocialMedia.Instagram.Title")} link={t("SocialMedia.Instagram.URL")} />
      <SocialButton text={t("SocialMedia.Twitter.Title")} link={t("SocialMedia.Twitter.URL")} />
      <SocialButton text={t("SocialMedia.Telegram.Title")} link={t("SocialMedia.Telegram.URL")} />
      <SocialButton text={t("SocialMedia.TikTok.Title")} link={t("SocialMedia.TikTok.URL")} />
      <SocialButton text={t("SocialMedia.Spotify.Title")} link={t("SocialMedia.Spotify.URL")} />
      <SocialButton text={t("SocialMedia.Patreon.Title")} link={t("SocialMedia.Patreon.URL")} />
      </div>
    </section>
  );
}