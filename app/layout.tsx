import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Al-Ilm Islamic Institute - Quranic & Arabic Studies',
  description: 'Premier Islamic education platform offering courses in Quranic studies, Hadith sciences, Arabic language, Islamic jurisprudence, and Islamic history with expert instructors.',
  keywords: 'Islamic education, Quran, Hadith, Arabic language, Islamic studies, online learning',
  openGraph: {
    title: 'Al-Ilm Islamic Institute',
    description: 'Learn Islam and Arabic from expert instructors',
    type: 'website',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
