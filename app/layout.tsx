import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meetup - Find Your Perfect Match',
  description: 'Meetup is the ultimate dating app for singles looking to find their perfect match. With our advanced matching algorithm and user-friendly interface, you can easily connect with like-minded individuals who share your interests and values. Whether you \'re looking for a casual date or a long-term relationship, Meetup has everything you need to make a meaningful connection. Sign up today and start swiping your way to love!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
