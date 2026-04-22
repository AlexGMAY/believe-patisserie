'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  ChevronDown, 
  HelpCircle, 
  MessageCircle 
} from 'lucide-react'

const faqItems = [
  {
    question: 'Quel est le délai minimum pour commander un gâteau ?',
    answer: 'Nous recommandons de commander au minimum 72 heures à l\'avance. Pour les pièces montées et les gâteaux de mariage, un délai de 2 à 4 semaines est idéal pour une personnalisation complète.',
  },
  {
    question: 'Proposez-vous des options sans gluten ou végétaliennes ?',
    answer: 'Oui ! Nous proposons une gamme complète de gâteaux sans gluten et végétaliens. Tous nos ingrédients sont soigneusement sélectionnés pour garantir la même qualité gustative que nos recettes traditionnelles.',
  },
  {
    question: 'Comment se passe la livraison ?',
    answer: 'Nous livrons dans tout Paris et l\'Île-de-France. La livraison est effectuée par notre équipe dans un véhicule réfrigéré. Pour les pièces montées, l\'installation sur place est incluse. Les frais de livraison varient selon la distance.',
  },
  {
    question: 'Puis-je personnaliser entièrement mon gâteau ?',
    answer: 'Absolument ! C\'est notre spécialité. Nous travaillons avec vous sur le design, les saveurs, les couleurs et même les inscriptions. Un rendez-vous de consultation (en personne ou en visio) est inclus pour les commandes personnalisées.',
  },
  {
    question: 'Quels sont les modes de paiement acceptés ?',
    answer: 'Nous acceptons les paiements par carte bancaire, virement bancaire et espèces. Un acompte de 30% est demandé à la commande, le solde étant dû à la livraison ou au retrait en boutique.',
  },
  {
    question: 'Puis-je venir retirer ma commande à l\'atelier ?',
    answer: 'Oui, le retrait à l\'atelier est possible et gratuit. Notre adresse : 12 rue du Faubourg Saint-Honoré, 75008 Paris. Nous vous recommandons d\'apporter un sac isotherme pour les longs trajets.',
  },
  {
    question: 'Comment conserver mon gâteau avant la dégustation ?',
    answer: 'Nos gâteaux se conservent au réfrigérateur. Sortez-le 30 minutes avant la dégustation pour qu\'il révèle tous ses arômes. Pour les entremets, une conservation de 48h maximum est recommandée.',
  },
  {
    question: 'Faites-vous des dégustations avant de commander ?',
    answer: 'Oui, nous proposons des box dégustation avec 4 mini-entremets de nos signatures (35€). Cette box est remboursée si vous confirmez une commande de plus de 100€.',
  },
]

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border border-gold/10 rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gold/5 transition-colors"
      >
        <span className="font-playfair text-base sm:text-lg pr-8">{question}</span>
        <ChevronDown 
          className={`h-5 w-5 text-gold flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-6 pb-4 text-sm sm:text-base text-muted-foreground">
          {answer}
        </p>
      </div>
    </motion.div>
  )
}

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="faq" ref={ref} className="py-20 sm:py-28 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern opacity-20" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 mb-6">
            <HelpCircle className="h-4 w-4 text-gold" />
            <span className="text-sm text-gold">Questions fréquentes</span>
          </div>
          <h2 className="section-title">
            Vous avez des <span className="gold-gradient">questions</span> ?
          </h2>
          <p className="section-subtitle">
            Retrouvez les réponses aux questions les plus courantes.
            Si vous ne trouvez pas votre réponse, n&apos;hésitez pas à nous contacter.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <FAQItem key={index} {...item} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-card/50 backdrop-blur-sm px-6 py-3">
            <MessageCircle className="h-5 w-5 text-gold" />
            <span className="text-sm">
              Une autre question ? {' '}
              <a href="#contact" className="text-gold hover:underline">
                Contactez-nous
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}