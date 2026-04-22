'use client'

import { motion } from 'framer-motion'

// Custom WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.828zM12.024 0C5.385 0 0 5.385 0 12.024c0 2.102.543 4.162 1.572 5.96L.056 24l6.216-1.631A11.977 11.977 0 0 0 12.024 24c6.639 0 12.024-5.385 12.024-12.024C24.048 5.385 18.663 0 12.024 0z"/>
  </svg>
)

export function WhatsAppButton() {
  const phoneNumber = '21626461292' // Format: country code + number without +
  const message = encodeURIComponent('Bonjour ! Je souhaiterais commander un gâteau chez Believe Patisserie.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:bg-[#20bd5a] transition-all duration-300"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
      
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-40" />
    </motion.a>
  )
}
