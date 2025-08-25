import './globals.css'

export const metadata = {
  title: 'Gabriel Pineda | Portfolio',
  description: 'Personal portfolio showcasing projects and skills.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}
