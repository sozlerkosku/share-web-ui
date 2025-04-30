'use client';

import { SocialIcon } from 'react-social-icons';

interface ButtonProps {
  text: string;
  link: string;
  visible: string;
}

export const SocialButton = ({ text, link, visible }: ButtonProps) => {
  const openUrl = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(link, '_blank');
  };

  if (visible === 'false') {
    return null;
  }

  return (
    <button
      className="mb-2 shadow bg-white p-2 rounded-full flex items-center hover:bg-gray-200 transition duration-300 w-full cursor-pointer"
      onClick={openUrl}
    >
      <SocialIcon url={link} style={{ height: 35, width: 35 }} label={text} />
      <span className="mx-4">{text}</span>
    </button>
  );
};
