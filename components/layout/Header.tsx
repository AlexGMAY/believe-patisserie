'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Créations', href: '#creations' },
  { label: 'Pourquoi nous', href: '#pourquoi-nous' },
  { label: 'Savoir-Faire', href: '#savoir-faire' },
  { label: 'Réserver', href: '#reserver' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-gold/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.svg"
                alt="Believe Patisserie"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-cormorant text-xl font-bold gold-gradient hidden sm:block">
              Believe Patisserie
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="#reserver"
              className="hidden md:inline-flex btn-gold py-2 px-5 text-sm"
            >
              Commander
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gold/10 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-foreground/70 hover:text-gold transition-colors border-b border-gold/10 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#reserver"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-gold w-full mt-4 py-3"
            >
              Commander maintenant
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
