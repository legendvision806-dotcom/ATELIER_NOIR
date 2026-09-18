import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ATELIER NOIR',
  description: 'Editorial Luxury Storefront',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#f4f1ea] text-[#111111] font-sans antialiased">
        {children}
      </body>
    </html>
  )
}