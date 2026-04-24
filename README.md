# 🥐 Believe Patisserie

<div align="center">
  <img src="https://raw.githubusercontent.com/yourusername/believe-patisserie/main/public/logo.svg" alt="Believe Patisserie Logo" width="120" />
  
  <h3>L'Art du Gâteau sur Mesure</h3>
  
  <p>
    <strong>Pâtisserie française d'exception à Paris</strong> • Gâteaux artisanaux • Mariage • Anniversaire • Événements
  </p>

  <p>
    <a href="https://believe-patisserie.vercel.app/"><strong>🌐 Voir le site en ligne →</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-14.0.4-black?logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind-3.3-38bdf8?logo=tailwindcss" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Framer_Motion-10.16-purple?logo=framer" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
  </p>
</div>

---

## ✨ Aperçu

**Believe Patisserie** est un site web professionnel et élégant pour une pâtisserie française haut de gamme. Conçu pour mettre en valeur des créations artisanales et permettre aux clients de réserver leurs gâteaux personnalisés en ligne.

### 🎯 Fonctionnalités Principales

- **6 Sections Complètes** — Hero, Créations, Savoir-Faire, Processus, Réservation, Contact
- **🌓 Mode Sombre/Clair** — Thème dark par défaut avec accents dorés
- **📱 Mobile-First** — Expérience optimale sur tous les appareils
- **🎬 Vidéo d'arrière-plan** — Hero section immersive avec vidéo
- **🖼️ Galerie de créations** — Filtrage par catégorie avec images Unsplash
- **📝 Formulaire de réservation** — Complet avec validation
- **🎨 Animations fluides** — Framer Motion pour une expérience premium
- **🔍 SEO Optimisé** — Métadonnées complètes, Open Graph, sémantique HTML
- **🇫🇷 Interface 100% française**

---

## 🚀 Démo en ligne

<div align="center">
  
### [https://believe-patisserie.vercel.app/](https://believe-patisserie.vercel.app/)

</div>

| Desktop | Mobile |
|---------|--------|
| ![Desktop Screenshot](https://via.placeholder.com/600x400/0a0a0a/d4a017?text=Desktop+View) | ![Mobile Screenshot](https://via.placeholder.com/300x600/0a0a0a/d4a017?text=Mobile+View) |

---

## 📦 Stack Technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| [Next.js](https://nextjs.org/) | 16.2.4 | Framework React avec App Router |
| [React](https://react.dev/) | 19.2.4 | Bibliothèque UI |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Typage statique |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Styling utilitaire |
| [Framer Motion](https://www.framer.com/motion/) | 12.38.0 | Animations |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.6 | Gestion du thème |
| [Lucide React](https://lucide.dev/) | 1.8.0 | Icônes |



## 📁 Structure du Projet

```
believe-patisserie/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Layout racine + métadonnées
│   ├── page.tsx                  # Page d'accueil
│   ├── globals.css               # Styles globaux + variables CSS
│   ├── manifest.json             # PWA manifest
│   └── favicon.ico               # Favicon
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Navigation
│   │   ├── Footer.tsx            # Pied de page
│   │   ├── ThemeProvider.tsx     # Provider de thème
│   │   └── ThemeToggle.tsx       # Bouton dark/light
│   │
│   └── sections/
│       ├── HeroSection.tsx       # Section héro (vidéo)
│       ├── CreationsSection.tsx  # Galerie de gâteaux
│       ├── SavoirFaireSection.tsx # Valeurs & expertise
│       ├── ProcessSection.tsx    # Étapes de commande
│       ├── ReservationSection.tsx # Formulaire de réservation
│       └── ContactSection.tsx    # Contact & carte
│
├── public/
│   ├── logo.svg                  # Logo dark bg + gold
│   ├── hero-video.mp4            # Vidéo d'arrière-plan
│   ├── hero-poster.jpg           # Fallback vidéo
│   └── pattern.png               # Texture de fond
│
├── tailwind.config.js            # Configuration Tailwind
├── next.config.js                # Configuration Next.js
├── package.json                  # Dépendances
└── README.md                     # Documentation
```

---

## 🛠️ Installation & Développement

### Prérequis

- Node.js 18+ 
- npm ou yarn ou pnpm

### Étapes d'installation

```bash
# 1. Cloner le repository
git clone https://github.com/myusername/believe-patisserie.git
cd believe-patisserie

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Crée une version de production |
| `npm run start` | Lance la version de production |
| `npm run lint` | Vérifie le code avec ESLint |

---

## 🎨 Personnalisation

### Modifier les gâteaux

Éditez le tableau `cakes` dans `components/sections/CreationsSection.tsx` :

```typescript
const cakes = [
  {
    id: 1,
    name: 'Votre Gâteau',
    description: 'Description...',
    price: 58,
    category: 'Entremets',
    image: 'https://images.unsplash.com/...',
    badge: 'Best-seller', // Optionnel
  },
  // ...
]
```

### Changer la vidéo d'arrière-plan

1. Remplacez `/public/hero-video.mp4` par votre vidéo
2. Mettez à jour `/public/hero-poster.jpg` pour le fallback

### Modifier les couleurs

Dans `app/globals.css`, ajustez les variables CSS :

```css
:root {
  --gold: 46 97% 48%;        /* Couleur or principale */
  --gold-light: 48 100% 68%;  /* Or clair */
  --gold-dark: 43 83% 35%;    /* Or foncé */
  --dark: 0 0% 4%;            /* Fond sombre */
}
```

### Ajouter des images Unsplash

Format recommandé pour les images Unsplash :

```typescript
// Ajoutez ces paramètres à l'URL Unsplash
image: 'https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?w=800&q=80'
//                                           ↑ ID de la photo        ↑ largeur ↑ qualité
```

---

## 📱 PWA & SEO

### PWA (Progressive Web App)

Le site est configuré comme PWA :
- ✅ Manifest JSON (`/app/manifest.json`)
- ✅ Icônes pour iOS/Android
- ✅ Thème color adaptatif
- ✅ Mode hors-ligne (à activer avec `next-pwa`)

### SEO

Optimisations incluses :
- ✅ Métadonnées complètes (`title`, `description`, `keywords`)
- ✅ Open Graph pour les réseaux sociaux
- ✅ Twitter Card
- ✅ URLs canoniques
- ✅ Structure sémantique HTML5
- ✅ Images avec `alt` descriptifs

---

## 🌐 Déploiement

### Déployer sur Vercel (Recommandé)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/believe-patisserie)

1. Connectez votre repository GitHub à Vercel
2. Cliquez sur "Deploy"
3. Votre site sera en ligne sur `https://believe-patisserie.vercel.app/`

### Déployer sur Netlify

```bash
# Build
npm run build

# Le dossier à déployer est .next
# Configurez Netlify pour utiliser next build
```

### Déployer sur un serveur Node.js

```bash
npm run build
npm run start
```

---

## 📄 Pages & Sections

| Section | ID | Description |
|---------|-----|-------------|
| **Accueil** | `#accueil` | Hero section avec vidéo et CTA |
| **Créations** | `#creations` | Galerie de gâteaux avec filtres |
| **Savoir-Faire** | `#savoir-faire` | Expertise et valeurs de la maison |
| **Processus** | `#processus` | 5 étapes de commande |
| **Réserver** | `#reserver` | Formulaire de réservation |
| **Contact** | `#contact` | Carte, horaires, informations |

---

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 📞 Contact

**Believe Patisserie**  
📍 12 rue du Faubourg Saint-Honoré, 75008 Paris  
📞 +33 1 42 68 53 00  
✉️ bonjour@believe-patisserie.com  

**Site web**: [https://believe-patisserie.vercel.app/](https://believe-patisserie.vercel.app/)

---

<div align="center">
  <p>✨ Fait avec passion et 🥐 à Paris Par Marvelbiz Solutions ✨</p>
  
  <sub>© 2026 Believe Patisserie. Tous droits réservés.</sub>
</div>
```
