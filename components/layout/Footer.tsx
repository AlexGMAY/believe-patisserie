import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SiInstagram, SiFacebook } from 'react-icons/si'

export function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-gold/10">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Believe Patisserie"
                width={40}
                height={40}
              />
              <span className="font-cormorant text-xl font-bold gold-gradient">
                Believe Patisserie
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              L&apos;excellence pâtissière depuis 2018.
              Créations sur mesure pour tous vos événements.
            </p>
            <div className="flex gap-3 pt-2">
              <Link
                href="https://instagram.com"
                className="w-10 h-10 rounded-full bg-card border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-dark transition-all"
                aria-label="Instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://facebook.com"
                className="w-10 h-10 rounded-full bg-card border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-dark transition-all"
                aria-label="Facebook"
              >
                <SiFacebook className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="#accueil" className="text-sm text-muted-foreground hover:text-gold transition-colors">Accueil</Link></li>
              <li><Link href="#creations" className="text-sm text-muted-foreground hover:text-gold transition-colors">Nos créations</Link></li>
              <li><Link href="#pourquoi-nous" className="text-sm text-muted-foreground hover:text-gold transition-colors">Pourquoi nous</Link></li>
              <li><Link href="#savoir-faire" className="text-sm text-muted-foreground hover:text-gold transition-colors">Savoir-faire</Link></li>
              <li><Link href="#reserver" className="text-sm text-muted-foreground hover:text-gold transition-colors">Réserver</Link></li>
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  12 rue du Faubourg Saint-Honoré, 75008 Paris
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+216 26-46-12-92</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-sm text-muted-foreground">bonjour@believe-patisserie.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Horaires</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Mardi - Samedi</span>
                <span className="text-gold">9h – 19h</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span className="text-gold">9h – 13h</span>
              </li>
              <li className="flex justify-between">
                <span>Lundi</span>
                <span className="text-gold">Fermé</span>
              </li>
            </ul>
            <p className="text-xs text-gold/70 mt-4">
              Commandes 72h à l&apos;avance minimum
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Believe Patisserie. Tous droits réservés. Powered by <a href="https://gemsalex.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Marvelbiz(MBZ) Solutions</a>.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
