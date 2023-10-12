import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { Rubik, Rubik_Dirt, Rubik_Maze } from 'next/font/google';
import './globals.css';
import * as Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Ore Adeleye',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.APP_URL || 'https://quodline.github.io'),
  themeColor: '#093d91',
};

const rubik = Rubik({
  weight: ['300', '500'],
  subsets: ['latin-ext'],
  variable: '--font-rubik',
});

const rubikDirt = Rubik_Dirt({
  weight: '400',
  subsets: ['latin-ext'],
  variable: '--font-rubik-dirt',
});

const rubikMaze = Rubik_Maze({
  weight: '400',
  subsets: ['latin-ext'],
  variable: '--font-rubik-maze',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang='en'
      className={`${rubik.variable} ${rubikDirt.variable} ${rubikMaze.variable} overflow-x-hidden font-sans`}
    >
      <body className='flex min-h-screen flex-col bg-primary font-rubik lg:flex-row'>
        <Nav.Main />
        <div className='flex flex-1 flex-col bg-gray-200 text-gray-700'>
          <div className='flex flex-col p-4 lg:basis-3/4 lg:justify-center'>
            {children}
          </div>
          <Nav.Bottom />
        </div>
      </body>
    </html>
  );
}
