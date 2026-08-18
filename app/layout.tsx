import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'
import { MetaPixel } from '@/components/analytics/meta-pixel'
import { YandexMetrica } from '@/components/analytics/yandex-metrica'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

const title = 'Почему после расставания так больно — психологический разбор'
const description =
  'Психологический разбор и практика от Виктории Негруцы, глубинного психолога. Почему боль после расставания не отпускает — даже когда разумом ты всё поняла.'

export const metadata: Metadata = {
  metadataBase: new URL('https://umcaty-wq.github.io/viktoria_negrutsa/'),
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    locale: 'ru_RU',
    images: [
      {
        url: '/images/victoria.jpg',
        width: 1200,
        height: 1600,
        alt: 'Виктория Негруца, глубинный психолог',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/victoria.jpg'],
  },
  icons: {
    icon: [
      {
        url: 'icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: 'apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'only light',
  themeColor: '#2F4156',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${playfair.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <FloatingWhatsAppButton />
        <MetaPixel />
        <YandexMetrica />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
