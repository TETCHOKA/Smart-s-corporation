

# Plan: Site vitrine – Smart's Corporation

## Overview
Build a multi-page showcase website for "Smart's Corporation", a test preparation center in Cameroon. 7 pages, responsive design, primary color #009EE2, with WhatsApp contact and EmailJS integration (configured later).

## Pages & Components

### 1. Shared Components
- **Navbar**: Logo + "Smart's Corporation", responsive hamburger menu, links to all pages
- **Footer**: Contact info, social links, WhatsApp button, copyright
- **WhatsApp floating button**: Fixed bottom-right, links to `https://wa.me/` (placeholder number)
- **InscriptionModal**: Reusable registration form (Name, Phone, Email, Formation select)

### 2. Page d'accueil (`/`)
- Hero section with slogan, CTA buttons ("S'inscrire", "Voir les formations")
- Overview of formation categories (Ingénierie, Enseignement, Management, Médecine, Écoles de bourse)
- Testimonials carousel
- Stats section (students, success rate, years)
- Final CTA

### 3. À propos (`/a-propos`)
- Mission & vision
- Why choose Smart's Corporation
- Team section (placeholder data)

### 4. Formations (`/formations`)
- Category tabs/cards with sub-formations
- Each formation: description, conditions, duration, mode (groupe/domicile), inscription button
- Data stored in a TypeScript constants file

### 5. Cours de remise à niveau (`/cours`)
- Description of tutoring services (à domicile, en groupe)
- Subject cards (Maths, Physique, Chimie, Culture générale)
- Advantages list

### 6. Galerie (`/galerie`)
- Photo grid with placeholder images
- Categories filter

### 7. Actualités (`/actualites`)
- Blog-style cards with placeholder articles (concours tips, dates)

### 8. Contact (`/contact`)
- Form: Nom, Téléphone, Email, Message
- WhatsApp number display
- Google Maps embed placeholder
- Social media links

## Technical Details

### File structure
```
src/
  components/
    Navbar.tsx
    Footer.tsx
    WhatsAppButton.tsx
    InscriptionModal.tsx
    HeroSection.tsx
    TestimonialCarousel.tsx
    FormationCard.tsx
    CategoryFilter.tsx
  data/
    formations.ts
    testimonials.ts
  pages/
    Index.tsx (accueil)
    About.tsx
    Formations.tsx
    Courses.tsx
    Gallery.tsx
    Blog.tsx
    Contact.tsx
```

### Design system updates
- Primary color `#009EE2` → HSL `199 100% 44%` added to CSS variables
- Professional, educational aesthetic with clean typography

### Routing
- Add all 7 routes in `App.tsx`

### SEO
- Update `index.html` title/meta for "Smart's Corporation - Préparation aux concours Cameroun"
- Semantic HTML throughout

### Forms
- Zod validation on all forms
- EmailJS integration placeholder (ready to configure)
- `encodeURIComponent` for WhatsApp links

### Responsive
- Mobile-first approach
- Hamburger menu on mobile
- Stacked layouts on small screens

## Sequence
1. Design system + shared components (Navbar, Footer, WhatsApp button)
2. Homepage with all sections
3. Formations page + data
4. About, Courses, Gallery, Blog, Contact pages
5. Registration modal + form validation
6. SEO meta tags + final polish

