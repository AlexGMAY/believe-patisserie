'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
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
  Users,
  ChevronLeft,
  ChevronRight,
  Quote
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
    name: 'Grace Mbuyi',
    role: 'Mariée • Tunis, Juin 2024',
    content: 'Le gâteau de notre mariage était absolument magnifique et délicieux. Nos invités en parlent encore ! La pièce montée était une œuvre d\'art.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80',
    location: '🇹🇳 Tunis',
  },
  {
    name: 'Amira Ben Salah',
    role: 'Anniversaire • Tunis, Mars 2024',
    content: 'Un entremets au chocolat exceptionnel. L\'équipe a su comprendre exactement ce que je voulais pour mes 30 ans. Service impeccable !',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    location: '🇹🇳 Tunis',
  },
  {
    name: 'Jean-Paul Kabasele',
    role: 'Anniversaire • Tunis, Janvier 2024',
    content: 'Service impeccable, gâteau sublime et livraison parfaite. Je recommande les yeux fermés ! Le fraisier était divin.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    location: '🇹🇳 Tunis',
  },
  {
    name: 'Mariem Chebbi',
    role: 'Mariage • Sousse, Mai 2024',
    content: 'Believe Patisserie a créé le gâteau de mes rêves ! Design floral parfait, saveurs exquises. Tous mes invités étaient émerveillés.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80',
    location: '🇹🇳 Sousse',
  },
  {
    name: 'Christian Mwamba',
    role: 'Anniversaire • Tunis, Avril 2024',
    content: 'Le Number Cake personnalisé pour les 50 ans de mon père était spectaculaire. Qualité et créativité au rendez-vous !',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    location: '🇹🇳 Tunis',
  },
  {
    name: 'Yasmine Trabelsi',
    role: 'Fiançailles • Carthage, Février 2024',
    content: 'Une expérience unique du début à la fin. Le gâteau était non seulement beau mais absolument délicieux. Merci infiniment !',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
    location: '🇹🇳 Carthage',
  },
  {
    name: 'Patrick Ilunga',
    role: 'Anniversaire • Tunis, Juillet 2025',
    content: 'La pièce montée était monumentale ! Un chef-d\'œuvre gustatif et visuel. Believe Patisserie a rendu notre journée parfaite.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&q=80',
    location: '🇹🇳 Tunis',
  },
  {
    name: 'Sarra Mejri',
    role: 'Baby Shower • La Marsa, Août 2024',
    content: 'Des gâteaux magnifiques et personnalisés pour mon baby shower. Les invitées ont adoré ! Saveurs raffinées et présentation parfaite.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    location: '🇹🇳 La Marsa',
  },
  {
    name: 'Blaise Tshisekedi',
    role: 'Diplomation • Tunis, Septembre 2024',
    content: 'Pour la remise de diplôme de ma fille, Believe a créé un gâteau qui a ébloui toute la famille. Professionnalisme et talent !',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    location: '🇹🇳 Tunis',
  },
]

const stats = [
  { value: '6+', label: 'Années d\'excellence' },
  { value: '200+', label: 'Gâteaux créés' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '24h', label: 'Réponse garantie' },
]

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Calculate visible testimonials based on screen size
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 768) return 2
    }
    return 1
  }

  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    setVisibleCount(getVisibleCount())
    const handleResize = () => setVisibleCount(getVisibleCount())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxSlides = testimonials.length - visibleCount

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1))
  }, [maxSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1))
  }, [maxSlides])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 4000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, nextSlide])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

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
            <span className="text-sm text-gold">L&apos;excellence à la française</span>
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

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-16"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 mb-4">
              <Users className="h-4 w-4 text-gold" />
              <span className="text-sm text-gold">Ce que nos clients disent</span>
            </div>
            <h3 className="text-2xl font-playfair">
              Ils nous ont fait <span className="gold-gradient">confiance</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Des clients satisfaits à travers l&apos;Afrique et le monde
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Slider Track */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: `-${currentSlide * (100 / visibleCount)}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.name}
                    className="w-full flex-shrink-0"
                    style={{ flexBasis: `${100 / visibleCount}%` }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-gold/10 h-full flex flex-col"
                    >
                      {/* Quote Icon */}
                      <Quote className="h-8 w-8 text-gold/20 mb-3" />
                      
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                        ))}
                      </div>
                      
                      {/* Content */}
                      <p className="text-sm text-muted-foreground mb-4 italic flex-grow">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      
                      {/* Author */}
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-gold/20">
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
                          <p className="text-xs text-gold/70">{testimonial.location}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-dark transition-all duration-300 shadow-lg z-10"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-dark transition-all duration-300 shadow-lg z-10"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gold w-6'
                      : 'bg-gold/30 hover:bg-gold/50'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
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
