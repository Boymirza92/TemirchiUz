import './globals.css';
import Navbar from './components/navbar/page';
import Footer from './components/footer/page';
import StyledComponentsRegistry from '@/lib/registry';
import {
  Poppins,
  Roboto,
  Inter,
  Open_Sans,
  Lato,
  Montserrat,
  Geist,
} from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-roboto',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
});

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-geist',
});

export const metadata = {
  title: 'TemirchiUz',
  description:
    'Temir mahsulotlari: panjara, perilla, darvozava eshik, havoza va boshqa temir maxsulotlar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body style={{ display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: "100vh",
          margin: "0",
          padding: "0",
          width: "100%",
          overflowX: "hidden" }}
        className={`
    ${poppins.variable}
    ${roboto.variable}
    ${inter.variable}
    ${openSans.variable}
    ${lato.variable}
    ${montserrat.variable}
    ${geist.variable}
  `}
      >
        <StyledComponentsRegistry>
          <Navbar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
