import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="mx-auto w-full flex text-center items-center justify-center mt-10 mb-10">
      <div className="w-25">
        <p className="text-shadow-xs animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-white">
          #{t('Home.Hashtag')}
        </p>
      </div>
    </footer>
  );
};
