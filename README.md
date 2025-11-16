# AI Consulting Website

A professional, high-converting AI consulting website built with Next.js 14, TypeScript, and Tailwind CSS. This website positions the business as a premium AI strategy and implementation partner for enterprise clients.

## Features

### Critical Features ✅
- **AI Readiness Assessment Tool**: Interactive 12-question assessment with personalized scoring, maturity level analysis, and recommendations
- **ROI Calculator**: Industry-specific ROI calculations with visual charts and 3-year projections
- **Service Packages**: Three-tier pricing structure (Strategy Sprint, Pilot Implementation, AI Transformation)
- **Case Study Showcase**: 3 detailed case studies with measurable results
- **Industry Solution Pages**: Dedicated pages for Finance, Healthcare, and Retail sectors
- **Contact/Booking System**: Comprehensive consultation booking with form validation

### Additional Features
- Responsive navigation with dropdown menus
- Hero section with trust indicators
- Client logo showcase
- Trust & credibility section with statistics
- Services overview with detailed pricing
- Industry expertise showcase
- Footer with comprehensive links
- Mobile-responsive design
- SEO-optimized structure

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## Project Structure

```
/src
  /app                  # Next.js app directory
    /assessment         # AI Readiness Assessment Tool
    /roi-calculator     # ROI Calculator
    /case-studies       # Case studies showcase
    /contact            # Contact and booking page
    /industries         # Industry solution pages
      /finance          # Financial services solutions
    page.tsx            # Homepage
    layout.tsx          # Root layout
  /components
    /ui                 # Reusable UI components
      Button.tsx
      Card.tsx
    /sections           # Page sections
      Navigation.tsx
      Hero.tsx
      Services.tsx
      CaseStudiesPreview.tsx
      Industries.tsx
      TrustSection.tsx
      CTASection.tsx
      Footer.tsx
  /lib                  # Utility functions
    utils.ts
    assessmentQuestions.ts
    roiCalculations.ts
  /styles
    globals.css         # Global styles
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Ai-consultant
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Key Pages

### Homepage (`/`)
- Hero section with value proposition
- Client logos
- Services overview
- Case studies preview
- Industry expertise
- Trust indicators
- Call-to-action sections

### AI Assessment (`/assessment`)
- 12-question interactive assessment
- Real-time progress tracking
- Email capture before results
- Personalized maturity scoring (0-100)
- Top 3 recommendations
- Industry benchmarking
- PDF download option

### ROI Calculator (`/roi-calculator`)
- Industry-specific templates
- Input fields for costs and metrics
- Visual charts (bar and line graphs)
- 3-year ROI projections
- Payback period calculation
- Email capture for detailed report

### Case Studies (`/case-studies`)
- 3 detailed success stories
- Industry-specific examples
- Measurable results and metrics
- Client testimonials
- Technologies used
- PDF download option

### Contact (`/contact`)
- Comprehensive contact form
- Meeting type selection
- Form validation
- Contact information
- Quick links to tools

### Industry Pages (`/industries/finance`)
- Industry-specific challenges
- Tailored AI solutions
- Key benefits and use cases
- Success story highlight
- Call-to-action sections

## Design System

### Colors
- **Primary**: Deep blue (#1E3A8A)
- **Secondary**: Electric blue (#3B82F6)
- **Accent**: Emerald green (#10B981)
- **Neutral**: Grays (#F3F4F6 to #111827)

### Typography
- **Headings**: Plus Jakarta Sans (Bold)
- **Body**: Inter (Regular)
- **Code**: JetBrains Mono

### Components
- Reusable Button component with variants
- Card component with hover effects
- Consistent spacing and layout patterns

## Customization

### Updating Content
- Edit assessment questions in `src/lib/assessmentQuestions.ts`
- Modify ROI calculations in `src/lib/roiCalculations.ts`
- Update case studies in `src/app/case-studies/page.tsx`
- Change service packages in `src/components/sections/Services.tsx`

### Styling
- Global styles in `src/styles/globals.css`
- Tailwind config in `tailwind.config.ts`
- Color scheme can be updated in the Tailwind config

## Performance Optimization

- Server-side rendering with Next.js App Router
- Optimized images (ready for Next.js Image component)
- Code splitting by route
- CSS optimization with Tailwind
- TypeScript for type safety

## Future Enhancements

- [ ] AI-powered chatbot integration
- [ ] Analytics integration (GA4, Microsoft Clarity)
- [ ] Email automation (SendGrid/Resend)
- [ ] CRM integration (HubSpot/Salesforce)
- [ ] Backend API for form submissions
- [ ] Database integration (PostgreSQL with Prisma)
- [ ] Authentication system
- [ ] Blog/Resources section
- [ ] Video testimonials
- [ ] Multi-language support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome)

## License

Copyright © 2024 AI Consulting. All rights reserved.

## Support

For questions or support, contact: contact@aiconsulting.com
