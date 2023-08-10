import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Person's Info Predictor",
  description: 'Predicts the info of person by its name',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-900 min-h-[100vh]'>{children}</body>
    </html>
  )
}
