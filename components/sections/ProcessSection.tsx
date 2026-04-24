'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Cake, CheckCircle, MessageCircle, Truck } from 'lucide-react'

const steps = [
  {
    icon: Calendar,
    title: '1. Choisissez',
    description: 'Parcourez nos créations ou décrivez votre projet personnalisé. Chaque gâteau est unique.',
    color: 'from-gold-light to-gold',
  },
  {
    icon: MessageCircle,
    title: '2. Échangez',
    description: 'Nous discutons de vos envies, du design, des saveurs. Devis gratuit sous 24h.',
    color: 'from-gold to-gold-dark',
  },
  {
    icon: CheckCircle,
    title: '3. Confirmez',
    description: 'Validation de la commande avec un acompte de 30%. Nous bloquons votre date.',
    color: 'from-gold-dark to-gold',
  },
  {
    icon: Cake,
    title: '4. Création',
    description: 'Notre chef réalise votre gâteau dans notre atelier avec des ingrédients frais.',
    color: 'from-gold to-gold-light',
  },
  {
    icon: Truck,
    title: '5. Dégustez',
    description: 'Livraison à Paris et en Île-de-France le jour J. Installation incluse pour les pièces montées.',
    color: 'from-gold-light to-gold',
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="processus" ref={ref} className="py-20 sm:py-28 bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">
            Commandez en{' '}
            <span className="gold-gradient">toute simplicité</span>
          </h2>
          <p className="section-subtitle">
            Un processus clair et transparent pour une expérience sans stress.
            De la première esquisse à la dégustation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-card rounded-2xl p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300 h-full group">
                  {/* Icon Circle */}
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} p-0.5 mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-gold" />
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="font-playfair text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>

                  {/* Step Number (Desktop) */}
                  <div className="hidden lg:block absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gold text-center text-dark pt-1 text-sm font-bold">
                    <span>{index + 1}</span>
                  </div>
                </div>

                {/* Arrow (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-2">
                    <div className="w-0.5 h-6 bg-gold/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/5 px-6 py-3">
            <CheckCircle className="h-5 w-5 text-gold" />
            <span className="text-sm">
              Délai minimum de commande : <strong className="text-gold">72 heures</strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
