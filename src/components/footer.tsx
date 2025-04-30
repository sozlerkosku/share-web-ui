import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BiLogoPlayStore, BiLogoApple, BiSolidHomeHeart } from 'react-icons/bi';
import { type IconType } from 'react-icons';

export interface ISocialIcon {
  name: string;
  url: string;
  icon: IconType;
}

const footerLinks: ISocialIcon[] = [
  {
    name: 'sozlerkoskusu',
    url: 'https://sozlerkosku.com/',
    icon: BiSolidHomeHeart,
  },
  {
    name: 'googleplay',
    url: 'https://play.google.com/store/apps/developer?id=Fatih+Ya%C4%9Fc%C4%B1',
    icon: BiLogoPlayStore,
  },
  {
    name: 'appstore',
    url: 'https://apps.apple.com/tr/developer/s%C3%B6zler-k%C3%B6%C5%9Fk%C3%BC/id1782541070',
    icon: BiLogoApple,
  },
];

export const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="mx-auto w-full flex flex-col text-center items-center justify-center mt-10 mb-10">
      <div className="flex flex-row items-center mb-10 gap-5">
        {' '}
        {footerLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-orange-300 text-white hover:bg-white hover:text-orange-400 p-1 transition-colors duration-200 ease-in-out"
            aria-label={link.name}
            target="_blank"
          >
            {link.icon({
              className: 'w-9 h-9',
            })}
          </Link>
        ))}
      </div>
      <div className="w-26">
        <p className="text-shadow-xs animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-white">
          #{t('Home.Hashtag')}
        </p>
      </div>
    </footer>
  );
};
