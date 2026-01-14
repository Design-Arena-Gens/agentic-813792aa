import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The First Pimple - 3D Animated Story',
  description: 'A sweet story about a girl facing her first pimple and natural home remedies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
