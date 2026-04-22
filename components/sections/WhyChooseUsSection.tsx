'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { 
  Award, 
  ChefHat, 
  Clock, 
  Heart, 
  Leaf, 
  ShieldCheck, 
  Sparkles, 
  Star,
  Truck,
  Users
} from 'lucide-react'

const reasons = [
  {
    icon: ChefHat,
    title: 'Chef Pâtissier Diplômé',
    description: 'Formé à l\'école Ferrandi Paris, notre chef apporte son expertise et sa créativité à chaque création.',
    color: 'from-amber-500 to-gold',
  },
  {
    icon: Leaf,
    title: 'Ingrédients d\'Exception',
    description: 'Farine de meule, beurre AOP Charentes-Poitou, chocolat Valrhona, fruits de saison français.',
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: Heart,
    title: '100% Fait Main',
    description: 'Chaque gâteau est entièrement réalisé à la main dans notre atelier parisien, sans prémix industriel.',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Sparkles,
    title: 'Personnalisation Totale',
    description: 'Nous créons le gâteau de vos rêves : design, saveurs, couleurs, tout est possible.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Truck,
    title: 'Livraison Premium',
    description: 'Livraison à Paris et en Île-de-France le jour J. Installation incluse pour les pièces montées.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: ShieldCheck,
    title: 'Satisfaction Garantie',
    description: 'Nous nous engageons à ce que votre gâteau dépasse vos attentes. Plus de 500 clients conquis.',
    color: 'from-gold to-gold-light',
  },
]

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Mariée • Juin 2024',
    content: 'Le gâteau de notre mariage était absolument magnifique et délicieux. Nos invités en parlent encore !',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616c7101333?w=100&q=80',
  },
  {
    name: 'Thomas Dubois',
    role: 'Anniversaire • Mars 2024',
    content: 'Un entremets au chocolat exceptionnel. L\'équipe a su comprendre exactement ce que je voulais.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Julie Leroy',
    role: 'Baptême • Janvier 2024',
    content: 'Service impeccable, gâteau sublime et livraison parfaite. Je recommande les yeux fermés !',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
]

const stats = [
  { value: '6+', label: 'Années d\'excellence' },
  { value: '5000+', label: 'Gâteaux créés' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '24h', label: 'Réponse garantie' },
]

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pourquoi-nous" ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 mb-6">
            <Star className="h-4 w-4 text-gold fill-gold" />
            <span className="text-sm text-gold">L'excellence à la française</span>
          </div>
          <h2 className="section-title">
            Pourquoi choisir{' '}
            <span className="gold-gradient">Believe Patisserie</span> ?
          </h2>
          <p className="section-subtitle">
            Découvrez ce qui fait de nous la référence de la pâtisserie sur mesure à Tunis.
            Une expérience unique, de la commande à la dégustation.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card/50 border border-gold/10 backdrop-blur-sm"
            >
              <p className="text-3xl sm:text-4xl font-bold gold-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-gold/20 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&q=80"
                alt="Atelier Believe Patisserie"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md rounded-2xl p-4 border border-gold/30 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Award className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium">Label Artisan</p>
                  <p className="text-xs text-muted-foreground">de Qualité 2024</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Right Column - Reasons Grid */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-playfair mb-4">
                Une expérience <span className="gold-gradient">unique</span>
              </h3>
              <p className="text-muted-foreground">
                De la première consultation à la dégustation, nous vous accompagnons 
                pour créer le gâteau parfait pour votre événement.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.slice(0, 4).map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-5 rounded-xl bg-card/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${reason.color} p-0.5 mb-3 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full rounded-lg bg-dark flex items-center justify-center">
                      <reason.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h4 className="font-playfair text-base mb-1">{reason.title}</h4>
                  <p className="text-xs text-muted-foreground">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Reasons Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="grid sm:grid-cols-2 gap-4 mb-16"
        >
          {reasons.slice(4, 6).map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="p-5 rounded-xl bg-card/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} p-0.5 group-hover:scale-110 transition-transform flex-shrink-0`}>
                  <div className="w-full h-full rounded-xl bg-dark flex items-center justify-center">
                    <reason.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-playfair text-lg mb-1">{reason.title}</h4>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 mb-4">
              <Users className="h-4 w-4 text-gold" />
              <span className="text-sm text-gold">Ce que nos clients disent</span>
            </div>
            <h3 className="text-2xl font-playfair">
              Ils nous ont fait <span className="gold-gradient">confiance</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-gold/10"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-gold" />
            <span className="text-sm">Ponctualité garantie</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-gold" />
            <span className="text-sm">Ingrédients certifiés</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-gold" />
            <span className="text-sm">Savoir-faire artisanal</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
