'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

// Social Media Icons
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-28 bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="section-title text-3xl">
                Venez nous{' '}
                <span className="gold-gradient">rencontrer</span>
              </h2>
              <p className="text-muted-foreground">
                Notre atelier est ouvert sur rendez-vous pour les consultations
                de gâteaux personnalisés.
              </p>
            </div>

            {/* Map Container */}
            <div className="rounded-3xl overflow-hidden border-2 border-gold/20 h-64 lg:h-80 shadow-2xl">
              <iframe
                title="Believe Patisserie - Localisation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.9099521946664!2d10.169159224899044!3d36.86857416384387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd330898c9daf1%3A0xd892535089b7cbe1!2sAmilcar%20International%20Hospital%20Center!5e0!3m2!1sen!2stn!4v1777036617824!5m2!1sen!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Address Note */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-gold/10">
              <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">À proximité</p>
                <p className="text-xs text-muted-foreground">
                  Situé près du Centre Hospitalier International Amilcar, 
                  facilement accessible depuis le centre-ville.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Link
                href="https://instagram.com/believe.patisserie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-dark transition-all duration-300"
                aria-label="Instagram Believe Patisserie"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-gold/20"
          >
            <h3 className="font-playfair text-2xl mb-8">Informations pratiques</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-gold flex-shrink-0" />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-muted-foreground">
                    Résidence Tej Ennacer II<br />
                    2034 Ariana, Tunis<br />
                    Tunisie
                  </p>
                  <p className="text-xs text-gold/70 mt-1">
                    Près du Centre Hospitalier Amilcar
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-gold flex-shrink-0" />
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-muted-foreground">+216 26-46-12-92</p>
                  <p className="text-xs text-gold/70 mt-1">
                    WhatsApp disponible
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-gold flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">
                    bienvenue@chezbelieve.com
                  </p>
                  <p className="text-xs text-gold/70 mt-1">
                    Réponse sous 24h
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-gold flex-shrink-0" />
                <div>
                  <p className="font-medium">Horaires d&apos;ouverture</p>
                  <div className="text-muted-foreground space-y-1">
                    <p>Lundi – Samedi : 9h – 19h</p>
                    <p>Dimanche : 9h – 13h</p>                    
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="mt-8 pt-6 border-t border-gold/10">
              <p className="font-medium mb-3">Questions fréquentes</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Délai minimum : 72h avant l&apos;événement</li>
                <li>• Acompte de 30% à la commande</li>
                <li>• Livraison Tunis et environs</li>
                <li>• Options sans gluten disponibles</li>
                <li>• Consultation sur rendez-vous</li>
              </ul>
            </div>

            {/* Google Maps Link */}
            <div className="mt-8 pt-6 border-t border-gold/10 text-center">
              <a
                href="https://maps.google.com/?q=36.868574,10.169159"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Ouvrir dans Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}