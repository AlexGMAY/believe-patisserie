'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Award, ChefHat, Leaf, Sparkles, Timer, Wheat } from 'lucide-react'

const features = [
  {
    icon: ChefHat,
    title: 'Chef pâtissier diplômé',
    description: 'Formé à l\'école Ferrandi Paris, notre chef apporte son expertise et sa créativité à chaque création.',
  },
  {
    icon: Leaf,
    title: 'Ingrédients d\'exception',
    description: 'Farine de meule, beurre AOP Charentes-Poitou, chocolat Valrhona, fruits de saison français.',
  },
  {
    icon: Sparkles,
    title: 'Personnalisation complète',
    description: 'Chaque gâteau est unique. Nous travaillons avec vous pour créer le dessert de vos rêves.',
  },
  {
    icon: Timer,
    title: 'Fabrication artisanale',
    description: 'Tout est fait main dans notre atelier parisien. Aucun additif, aucun prémix industriel.',
  },
  {
    icon: Wheat,
    title: 'Options sans gluten',
    description: 'Gamme complète de gâteaux sans gluten, aussi savoureux que nos recettes traditionnelles.',
  },
  {
    icon: Award,
    title: 'Label Artisan de Qualité',
    description: 'Certifié par la Chambre des Métiers pour notre excellence et notre savoir-faire.',
  },
]

export function SavoirFaireSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="savoir-faire" ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 mb-4">
                <Sparkles className="h-4 w-4 text-gold" />
                <span className="text-sm text-gold">Notre savoir-faire</span>
              </div>
              <h2 className="section-title">
                L&apos;excellence{' '}
                <span className="gold-gradient">pâtissière</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Chez Believe Patisserie, nous perpétuons la grande tradition de la pâtisserie
                Congolaise et Tunisienne tout en y apportant une touche de modernité.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-5 rounded-xl bg-card/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                    <feature.icon className="h-5 w-5 text-gold" />
                  </div>
                  <h4 className="font-playfair text-lg mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-gold/20">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="Chef pâtissier Believe"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-16 -right-8 bg-card/90 backdrop-blur-md rounded-2xl p-6 border border-gold/30 shadow-2xl"
            >
              <div className="text-center">
                <p className="text-4xl font-bold gold-gradient">6+</p>
                <p className="text-sm text-muted-foreground">ans d&apos;excellence</p>
              </div>
              <div className="w-px h-8 bg-gold/30 mx-auto my-3" />
              <div className="text-center">
                <p className="text-4xl font-bold gold-gradient">300+</p>
                <p className="text-sm text-muted-foreground">gâteaux créés</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
