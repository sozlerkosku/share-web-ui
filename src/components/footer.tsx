import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations();
  console.log(t);
  return (
    <footer>
      Footer
    </footer>
  );
};
