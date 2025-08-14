import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://veo-next.vercel.app'),
  title: 'VEO - Jabones Artesanales',
  description: 'Lo que mi piel siente. Jabones artesanales naturales elaborados con ingredientes naturales y amor.',
  generator: 'Next.js',
  applicationName: 'VEO',
  referrer: 'origin-when-cross-origin',
  keywords: ['jabones artesanales', 'natural', 'piel', 'VEO', 'Nicaragua'],
  authors: [{ name: 'VEO' }],
  creator: 'VEO',
  publisher: 'VEO',
  icons: {
    icon: '/veologo.png',
    shortcut: '/veologo.png',
    apple: '/veologo.png',
  },
  openGraph: {
    title: 'VEO - Jabones Artesanales',
    description: 'Lo que mi piel siente. Jabones artesanales naturales.',
    url: 'https://veo-next.vercel.app',
    siteName: 'VEO',
    images: [
      {
        url: '/veologo.png',
        width: 500,
        height: 500,
        alt: 'VEO Logo',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VEO - Jabones Artesanales',
    description: 'Lo que mi piel siente. Jabones artesanales naturales.',
    images: ['/veologo.png'],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/veo-logo.png" />
        <link rel="apple-touch-icon" href="/veo-logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
