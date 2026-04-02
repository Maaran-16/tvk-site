import type { Metadata } from 'next'
import { Geist_Mono, Noto_Sans, Tiro_Tamil } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

const notoSans = Noto_Sans({
  subsets: ['latin', 'tamil'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-noto-sans',
});

const tiroTamil = Tiro_Tamil({
  subsets: ['latin', 'tamil'],
  weight: '400',
  variable: '--font-tiro',
});

export const metadata: Metadata = {
  title: 'TVK - Tamizhaga Vetri Kazhagam | வாக்குறுதி',
  description: 'Tamizhaga Vetri Kazhagam (TVK) official election promises and manifesto.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ta">
      <body className={`${notoSans.variable} ${tiroTamil.variable} ${_geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
