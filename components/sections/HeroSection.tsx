'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Award, Clock, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background with Dark Overlay */}
      {/* <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay with gold tint 
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/70 to-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div> */}
      
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=1920&q=80"
          alt="Believe Patisserie"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/70 to-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm px-4 py-2"
            >
              <Sparkles className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-gold">Patisserie fondée en 2018</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold leading-tight"
            >
              L&apos;art du gâteau{' '}
              <span className="gold-gradient block">sur mesure</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-foreground/80 max-w-lg"
            >
              Believe Patisserie sublime vos événements avec des créations uniques. 
              Chaque gâteau est une œuvre d&apos;art gourmande, pensée pour émerveiller.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6 pt-2"
            >
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-gold" />
                <span className="text-sm">100% fait main</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold" />
                <span className="text-sm">Livraison à domicile</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="#reserver" className="btn-gold group">
                Réserver maintenant
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#creations" className="btn-outline-gold">
                Découvrir nos créations
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-3xl" />
              <div className="relative rounded-full border-2 border-gold/30 p-2">
                <div className="rounded-full border border-gold/20 p-2">
                  <div className="relative aspect-square rounded-full bg-gradient-to-br from-dark-surface to-dark-elevated border border-gold/40 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80"
                      alt="Gâteau signature"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gold text-dark rounded-full px-6 py-3 shadow-xl">
                <span className="font-bold text-lg">★ 4.9</span>
                <span className="text-xs block">200+ avis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-foreground/60">Défiler</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
