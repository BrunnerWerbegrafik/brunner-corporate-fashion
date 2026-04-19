import type { ReactNode } from 'react';
import Footer from './Footer';
import TopNav from './TopNav';
import Abschlusskante from './Abschlusskante';

type Props = {
  children: ReactNode;
  /**
   * 'hero' rendert die TopNav ohne umschließenden Container, damit sie
   * sich über ein Hero-Bild legen kann. 'default' rendert sie in einer
   * hellen Kopfleiste über dem Inhalt.
   */
  navVariant?: 'hero' | 'default';
};

export default function Layout({ children, navVariant = 'default' }: Props) {
  return (
    <div className="cf-app">
      {navVariant === 'default' && <TopNav variant="standard" />}
      <main className="cf-app__main">{children}</main>
      <Abschlusskante variant="grau" />
      <Footer />
    </div>
  );
}
