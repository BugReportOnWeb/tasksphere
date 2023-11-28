import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

interface RootLayoutProps {
    children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
    title: 'Task Manager',
    description: 'A Task Manager to manage tasks obv ;)',
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased max-w-5xl mx-auto leading-7`}>
                {children}
            </body>
        </html>
    )
}

export { metadata };
export default RootLayout;
