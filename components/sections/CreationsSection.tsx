'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Cake, ChevronRight, Heart } from 'lucide-react'

const cakeCategories = ['Tous', 'Mariage', 'Anniversaire', 'Entremets', 'Tartes']

const cakes = [
  {
    id: 1,
    name: 'Entremets Signature',
    description: 'Biscuit moelleux, crémeux vanille de Madagascar, insert fruits rouges',
    price: 58,
    category: 'Entremets',
    image: 'https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?w=800&q=80',
    badge: 'Best-seller',
  },
  {
    id: 2,
    name: 'Tarte Citron Basilic',
    description: 'Pâte sablée, lemon curd infusé au basilic frais, meringue italienne',
    price: 42,
    category: 'Tartes',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80', // Fixed
    badge: 'Nouveauté',
  },
  {
    id: 3,
    name: 'Chocolat Grand Cru',
    description: 'Ganache Pérou 64%, croustillant praliné noisette, biscuit sans farine',
    price: 64,
    category: 'Entremets',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80',
  },
  {
    id: 4,
    name: 'Fraisier Français',
    description: 'Génoise vanille, crème mousseline, fraises françaises, pâte d\'amande',
    price: 52,
    category: 'Anniversaire',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
  },
  {
    id: 5,
    name: 'Pièce Montée Mariage',
    description: 'Choux craquelin, crème diplomate, caramel beurre salé, nougatine',
    price: 180,
    category: 'Mariage',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80', // Fixed
    badge: 'Sur commande',
  },
  {
    id: 6,
    name: 'Opéra Renversé',
    description: 'Biscuit Joconde, ganache café, crème au beurre, glaçage chocolat',
    price: 56,
    category: 'Entremets',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80', // Fixed
  },
]

export function CreationsSection() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filteredCakes = activeCategory === 'Tous'
    ? cakes
    : cakes.filter(cake => cake.category === activeCategory)

  return (
    <section id="creations" ref={ref} className="py-20 sm:py-28 bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 mb-6">
            <Cake className="h-4 w-4 text-gold" />
            <span className="text-sm text-gold">Nos créations</span>
          </div>
          <h2 className="section-title">
            Des gâteaux qui{' '}
            <span className="gold-gradient">racontent une histoire</span>
          </h2>
          <p className="section-subtitle">
            Chaque création est pensée pour émerveiller vos papilles et vos yeux.
            Ingrédients d&apos;exception, savoir-faire artisanal.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {cakeCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-dark shadow-lg shadow-gold/20'
                  : 'bg-card border border-gold/20 text-foreground/70 hover:text-foreground hover:border-gold/40'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={cake.image}
                  alt={cake.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badge */}
                {cake.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-dark">
                      <Heart className="h-3 w-3 fill-dark" />
                      {cake.badge}
                    </span>
                  </div>
                )}

                {/* Quick View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="btn-gold py-2 px-4 text-sm">
                    Commander
                    <ChevronRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-playfair text-xl">{cake.name}</h3>
                  <span className="text-gold font-semibold">{cake.price}DT</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {cake.description}
                </p>
                <p className="text-xs text-gold/70 mt-3 uppercase tracking-wider">
                  {cake.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="btn-outline-gold">
            Voir toutes nos créations
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
