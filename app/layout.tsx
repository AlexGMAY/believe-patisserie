import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { BackToTop } from '@/components/ui/BackToTop'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
// import { ThemeProvider } from 'next-themes'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Believe Patisserie · Pâtisserie française d\'exception à Paris',
  description: 'Gâteaux artisanaux sur commande. Mariage, anniversaire, événements. Livraison Paris et Île-de-France. Créations uniques par nos chefs pâtissiers.',
  keywords: 'pâtisserie Paris, gâteau sur mesure, wedding cake, entremets, tarte citron, chocolat grand cru, Believe Patisserie, pâtisserie française',
  authors: [{ name: 'Believe Patisserie' }],
  creator: 'Believe Patisserie',
  publisher: 'Believe Patisserie',
  metadataBase: new URL('https://believe-patisserie.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Believe Patisserie · L\'art du gâteau sur mesure',
    description: 'Pâtisserie française d\'exception. Réservez votre gâteau personnalisé.',
    url: 'https://believe-patisserie.fr',
    siteName: 'Believe Patisserie',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Believe Patisserie',
    description: 'Commandez votre gâteau sur mesure',
  },
  manifest: '/manifest.json',
  category: 'food',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${playfair.variable} ${montserrat.variable} ${cormorant.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
