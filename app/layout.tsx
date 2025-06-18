import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Veo',
  description: 'Veo page',
  generator: 'netx.js',
  applicationName: 'Veo',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Veo' }],
  creator: 'Veo',
  publisher: 'Veo',
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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
