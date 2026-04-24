import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Clock, ArrowUpRight, Heart, ChevronRight } from 'lucide-react'
import { SiInstagram, SiFacebook } from 'react-icons/si'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-gold/10">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 rounded-br-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gold/3 rounded-tl-full blur-3xl" />

      <div className="container-custom relative py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          
          {/* Brand Column */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300" />
                <Image
                  src="/logo.jpg"
                  alt="Believe Patisserie"
                  width={56}
                  height={56}
                  className="rounded-full relative z-10 border-2 border-gold/30 group-hover:border-gold transition-all duration-300"
                />
              </div>
              <div>
                <span className="font-cormorant text-2xl font-bold gold-gradient block leading-tight">
                  Believe
                </span>
                <span className="text-xs text-gold/60 uppercase tracking-[0.2em]">
                  Patisserie
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-muted-foreground/80 leading-relaxed">
              L&apos;excellence pâtissière depuis 2018. Chaque gâteau est une œuvre d&apos;art 
              créée avec passion pour sublimer vos événements.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-muted-foreground/60 uppercase tracking-wider">
                Suivez-nous
              </span>
              <div className="flex gap-2">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-full bg-card/50 border border-gold/20 flex items-center justify-center hover:bg-gradient-to-br hover:from-gold hover:to-gold-dark hover:border-gold transition-all duration-300"
                  aria-label="Instagram"
                >
                  <SiInstagram className="h-4 w-4 text-gold group-hover:text-dark transition-colors" />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-full bg-card/50 border border-gold/20 flex items-center justify-center hover:bg-gradient-to-br hover:from-gold hover:to-gold-dark hover:border-gold transition-all duration-300"
                  aria-label="Facebook"
                >
                  <SiFacebook className="h-4 w-4 text-gold group-hover:text-dark transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-playfair text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-gold to-transparent rounded-full" />
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Accueil', href: '#accueil' },
                { label: 'Nos créations', href: '#creations' },
                { label: 'Pourquoi nous', href: '#pourquoi-nous' },
                { label: 'Galerie', href: '#galerie' },
                { label: 'Savoir-faire', href: '#savoir-faire' },
                { label: 'Réserver', href: '#reserver' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-gold transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-playfair text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-gold to-transparent rounded-full" />
              Contact
            </h4>
            <ul className="space-y-5">
              <li>
                <Link
                  href="https://maps.google.com/?q=36.868574,10.169159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-3 hover:bg-gold/5 rounded-lg p-2 -m-2 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <MapPin className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium group-hover:text-gold transition-colors">
                      Adresse
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">
                      Résidence Tej Ennacer II<br />
                      2034 Ariana, Tunis
                    </p>
                  </div>
                </Link>
              </li>
              
              <li>
                <Link
                  href="tel:+21626461292"
                  className="group flex gap-3 hover:bg-gold/5 rounded-lg p-2 -m-2 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Phone className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium group-hover:text-gold transition-colors">
                      Téléphone
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">
                      +216 26-46-12-92
                    </p>
                  </div>
                </Link>
              </li>
              
              <li>
                <Link
                  href="mailto:bienvenue@chezbelieve.com"
                  className="group flex gap-3 hover:bg-gold/5 rounded-lg p-2 -m-2 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Mail className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium group-hover:text-gold transition-colors">
                      Email
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">
                      bienvenue@chezbelieve.com
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="font-playfair text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-gold to-transparent rounded-full" />
              Horaires
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gold/5 border border-gold/10">
                <Clock className="h-4 w-4 text-gold flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Lundi - Samedi</span>
                    <span className="text-sm font-medium text-gold">9h – 19h</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gold/5 border border-gold/10">
                <Clock className="h-4 w-4 text-gold flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Dimanche</span>
                    <span className="text-sm font-medium text-gold">9h – 13h</span>
                  </div>
                </div>
              </div>
              
              {/* <div className="flex items-center gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                <Clock className="h-4 w-4 text-red-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Lundi</span>
                    <span className="text-sm font-medium text-red-400">Fermé</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="mt-5 p-3 rounded-lg bg-gold/5 border border-gold/10">
              <p className="text-xs text-gold/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Commandes 72h à l&apos;avance
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 pt-8 border-t border-gold/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-xs text-muted-foreground/50 text-center sm:text-left">
              &copy; {currentYear} Believe Patisserie. Tous droits réservés.
            </p>

            {/* Powered by */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground/50">
              <span>Powered</span>              
              <span>by</span>
              <a
                href="https://gemsalex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-gold/80 hover:text-gold transition-colors font-medium"
              >
                Marvelbiz(MBZ) Solutions
                <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
