'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { 
  Camera, 
  Heart, 
  Maximize2, 
  X 
} from 'lucide-react'

const galleryCategories = ['Tous', 'Mariage', 'Anniversaire', 'Entremets', 'Tartes', 'Pièces montées']

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80',
    alt: 'Pièce montée mariage blanc et or',
    category: 'Mariage',
    likes: 124,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1623428454614-9e9a4b0e6e3b?w=800&q=80',
    alt: 'Wedding cake floral',
    category: 'Mariage',
    likes: 98,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1578985545062-69928b9d9587?w=800&q=80',
    alt: 'Entremets signature fruits rouges',
    category: 'Entremets',
    likes: 156,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1606890737304-57a1ca8f5b62?w=800&q=80',
    alt: 'Gâteau chocolat grand cru',
    category: 'Entremets',
    likes: 203,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
    alt: 'Fraisier français traditionnel',
    category: 'Anniversaire',
    likes: 167,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80',
    alt: 'Tarte citron meringuée',
    category: 'Tartes',
    likes: 145,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1578985545062-69928b9d9587?w=800&q=80',
    alt: 'Opéra café et chocolat',
    category: 'Entremets',
    likes: 112,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=800&q=80',
    alt: 'Gâteau d\'anniversaire coloré',
    category: 'Anniversaire',
    likes: 189,
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80',
    alt: 'Cake design moderne',
    category: 'Pièces montées',
    likes: 78,
  },
]

// Lightbox Component
function Lightbox({ image, onClose }: { image: typeof galleryImages[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-dark/50 text-white hover:bg-gold transition-colors z-10"
        aria-label="Fermer"
      >
        <X className="h-6 w-6" />
      </button>
      
      <div 
        className="relative max-w-4xl max-h-[85vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-square sm:aspect-[4/3] w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain rounded-2xl"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
          <p className="text-sm sm:text-base font-medium">{image.alt}</p>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 fill-red-500 text-red-500" />
            <span className="text-sm">{image.likes}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = activeCategory === 'Tous'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section id="galerie" ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 mb-6">
            <Camera className="h-4 w-4 text-gold" />
            <span className="text-sm text-gold">Nos réalisations</span>
          </div>
          <h2 className="section-title">
            Galerie de <span className="gold-gradient">créations</span>
          </h2>
          <p className="section-subtitle">
            Découvrez quelques-unes de nos plus belles réalisations.
            Chaque gâteau est unique, créé avec passion pour nos clients.
          </p>
        </motion.div>

        {/* Instagram-style CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <a
            href="https://instagram.com/believe.patisserie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <circle cx="12" cy="12" r="3.5"/>
              <circle cx="17.5" cy="6.5" r="1.5"/>
            </svg>
            <span>Suivez-nous sur Instagram @believe.patisserie</span>
          </a>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
        >
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-dark shadow-lg shadow-gold/20'
                  : 'bg-card border border-gold/20 text-foreground/70 hover:text-foreground hover:border-gold/40'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="break-inside-avoid mb-4 sm:mb-5"
            >
              <div 
                className="group relative rounded-xl overflow-hidden bg-card border border-gold/10 cursor-pointer hover:border-gold/30 transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium line-clamp-2">{image.alt}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gold bg-dark/50 px-2 py-1 rounded-full">
                          {image.category}
                        </span>
                        <div className="flex items-center gap-1 text-white/80">
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                          <span className="text-xs">{image.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2 rounded-full bg-dark/50 backdrop-blur-sm">
                      <Maximize2 className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/believe.patisserie"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            Voir plus sur Instagram
            <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              <circle cx="12" cy="12" r="3.5"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </section>
  )
}
