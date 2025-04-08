import { useTranslations } from 'next-intl';

export const Header = () => {
  const t = useTranslations();
  console.log(t);
  return (
    <header>
      Header
    </header>
  );
};