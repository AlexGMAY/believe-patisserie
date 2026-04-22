'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { SiInstagram, SiFacebook } from 'react-icons/si'
import Link from 'next/link'

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

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border-2 border-gold/20 h-64 lg:h-80">
              <iframe
                title="Believe Patisserie - Paris"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.3100%2C48.8650%2C2.3300%2C48.8750&layer=mapnik&marker=48.8700%2C2.3200"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Link
                href="https://instagram.com"
                className="w-12 h-12 rounded-full bg-card border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-dark transition-all duration-300"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com"
                className="w-12 h-12 rounded-full bg-card border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-dark transition-all duration-300"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
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
                    12 rue du Faubourg Saint-Honoré<br />
                    75008 Paris, France
                  </p>
                  <p className="text-xs text-gold/70 mt-1">
                    M° Madeleine ou Concorde
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
                    bonjour@believe-patisserie.com
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
                    <p>Mardi – Samedi : 9h – 19h</p>
                    <p>Dimanche : 9h – 13h</p>
                    <p className="text-gold">Lundi : Fermé</p>
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
                <li>• Livraison Paris & Île-de-France</li>
                <li>• Options végétariennes disponibles</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
