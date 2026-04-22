'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, Cake, Clock, Mail, MapPin, MessageSquare, Phone, User, Users } from 'lucide-react'

export function ReservationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="reserver" ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/10" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="section-title">
                Réservez votre{' '}
                <span className="gold-gradient">gâteau</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Remplissez le formulaire et nous vous répondrons sous 24h pour
                confirmer votre commande et vous envoyer un devis personnalisé.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-gold/10">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-medium">Notre atelier</p>
                  <p className="text-sm text-muted-foreground">
                    12 rue du Faubourg Saint-Honoré<br />
                    75008 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-gold/10">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-medium">Horaires de commande</p>
                  <p className="text-sm text-muted-foreground">
                    Mar–Sam : 9h – 19h<br />
                    Dim : 9h – 13h<br />
                    <span className="text-gold">Commandes 72h à l&apos;avance</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-gold/10">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-sm text-muted-foreground">
                    +216 26-46-12-92<br />
                    <span className="text-xs">(appel ou WhatsApp)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Message */}
            <div className="p-6 rounded-2xl bg-gold/5 border border-gold/20">
              <p className="text-sm italic">
                "Nous avons à cœur de rendre chaque événement unique. Votre gâteau
                sera réalisé avec passion et précision."
              </p>
              <p className="text-sm font-medium mt-3 gold-gradient">
                — John Believe, Chef pâtissier et fondateur
              </p>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gold/20 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                    <Cake className="h-10 w-10 text-gold" />
                  </div>
                  <h3 className="text-2xl font-playfair mb-3">Merci pour votre confiance !</h3>
                  <p className="text-muted-foreground mb-8">
                    Votre demande a bien été envoyée. Notre équipe vous contactera
                    dans les 24h pour confirmer votre réservation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline-gold"
                  >
                    Nouvelle réservation
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-playfair mb-6">Formulaire de réservation</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium">
                        <User className="h-4 w-4 text-gold" />
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-xl border border-gold/20 bg-background/50 px-4 py-3 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"
                        placeholder="Marie Dubois"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium">
                        <Mail className="h-4 w-4 text-gold" />
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl border border-gold/20 bg-background/50 px-4 py-3 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"
                        placeholder="marie@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium">
                        <Phone className="h-4 w-4 text-gold" />
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full rounded-xl border border-gold/20 bg-background/50 px-4 py-3 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"
                        placeholder="06 12 34 56 78"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium">
                        <Calendar className="h-4 w-4 text-gold" />
                        Date souhaitée *
                      </label>
                      <input
                        type="date"
                        required
                        min={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                        className="w-full rounded-xl border border-gold/20 bg-background/50 px-4 py-3 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium">
                        <Cake className="h-4 w-4 text-gold" />
                        Type de gâteau
                      </label>
                      <select className="w-full rounded-xl border border-gold/20 bg-background/50 px-4 py-3 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition">
                        <option>Entremets Signature</option>
                        <option>Tarte Citron Basilic</option>
                        <option>Chocolat Grand Cru</option>
                        <option>Fraisier Français</option>
                        <option>Pièce Montée</option>
                        <option>Gâteau personnalisé</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium">
                        <Users className="h-4 w-4 text-gold" />
                        Nombre de parts
                      </label>
                      <select className="w-full rounded-xl border border-gold/20 bg-background/50 px-4 py-3 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition">
                        <option>4-6 parts</option>
                        <option>8-10 parts</option>
                        <option>12-15 parts</option>
                        <option>20-25 parts</option>
                        <option>30+ parts</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium">
                      <MessageSquare className="h-4 w-4 text-gold" />
                      Message / Précisions
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-xl border border-gold/20 bg-background/50 px-4 py-3 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition resize-none"
                      placeholder="Allergies, design particulier, message sur le gâteau, thème de l'événement..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gold py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Envoi en cours...</span>
                      </>
                    ) : (
                      'Envoyer la demande de réservation'
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Champs obligatoires. Nous respectons votre vie privée.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
