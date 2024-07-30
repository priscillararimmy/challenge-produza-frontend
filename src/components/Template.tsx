import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface TemplateProps {
  children: ReactNode;
}

export const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </>
  );
};



