# AI Consulting Website

A professional, high-converting AI consulting website built with Next.js 14, TypeScript, and Tailwind CSS. This website positions the business as a premium AI strategy and implementation partner for enterprise clients.

## Features

### Critical Features ✅
- **AI Readiness Assessment Tool**: Interactive 12-question assessment with personalized scoring, maturity level analysis, and recommendations
- **ROI Calculator**: Industry-specific ROI calculations with visual charts and 3-year projections
- **Service Packages**: Three-tier pricing structure with dedicated detail pages
  - AI Strategy Sprint ($15K-$30K, 2 weeks)
  - AI Pilot Implementation ($50K-$150K, 2-3 months)
  - AI Transformation ($200K+, 6-12 months)
- **Case Study Showcase**: 3 detailed case studies with measurable results
- **Industry Solution Pages**: Comprehensive pages for Finance, Healthcare, and Retail sectors
- **Contact/Booking System**: Full-featured consultation booking with form validation

### Additional Features
- **Interactive Chatbot**: Intelligent chatbot widget with quick replies and conversation flow
- **Service Detail Pages**: In-depth pages for each service tier with deliverables and timelines
- Responsive navigation with dropdown menus
- Hero section with trust indicators
- Client logo showcase
- Trust & credibility section with statistics
- Industry expertise showcase
- Footer with comprehensive links
- Mobile-responsive design throughout
- **SEO Optimization**: Complete sitemap.xml and robots.txt for search engines

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
      /healthcare       # Healthcare solutions
      /retail           # Retail & e-commerce solutions
    /services           # Service detail pages
      /strategy         # AI Strategy Sprint details
      /implementation   # AI Pilot Implementation details
      /transformation   # AI Transformation details
    page.tsx            # Homepage
    layout.tsx          # Root layout
  /components
    /ui                 # Reusable UI components
      Button.tsx
      Card.tsx
      Chatbot.tsx       # Interactive chatbot widget
    /sections           # Page sections
      Navigation.tsx
      Hero.tsx
      Services.tsx
      CaseStudiesPreview.tsx
      Industries.tsx
      TrustSection.tsx
      CTASection.tsx
      Footer.tsx
      ClientLogos.tsx
  /lib                  # Utility functions
    utils.ts
    assessmentQuestions.ts
    roiCalculations.ts
  /styles
    globals.css         # Global styles
/public
  robots.txt            # Search engine directives
  sitemap.xml           # SEO sitemap
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

### Industry Pages
All three industry pages include:
- **Finance** (`/industries/finance`): Fraud detection, risk assessment, compliance
- **Healthcare** (`/industries/healthcare`): Diagnostic AI, patient flow, drug discovery
- **Retail** (`/industries/retail`): Demand forecasting, personalization, inventory optimization

Each page features:
- Industry-specific challenges and statistics
- 5 tailored AI solutions with benefits
- Use cases and applications
- Success story highlight
- Industry-themed design and CTAs

### Service Detail Pages
Each service tier has a dedicated page:
- **Strategy Sprint** (`/services/strategy`): 2-week engagement details, deliverables, timeline
- **Pilot Implementation** (`/services/implementation`): 3-month roadmap, tech stack, support
- **AI Transformation** (`/services/transformation`): 6-12 month journey, governance, enterprise features

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

## Features Summary

### Completed ✅
- 10+ fully functional pages
- AI Readiness Assessment with scoring engine
- ROI Calculator with visual charts
- 3 Industry solution pages (Finance, Healthcare, Retail)
- 3 Service detail pages (Strategy, Implementation, Transformation)
- Interactive chatbot UI component
- Case studies showcase
- Contact and booking system
- SEO optimization (sitemap, robots.txt)
- Mobile-responsive design
- TypeScript throughout

### Future Enhancements

- [ ] Backend integration for chatbot (OpenAI GPT-4 API)
- [ ] Analytics integration (GA4, Microsoft Clarity)
- [ ] Email automation (SendGrid/Resend)
- [ ] CRM integration (HubSpot/Salesforce)
- [ ] Backend API for form submissions
- [ ] Database integration (PostgreSQL with Prisma)
- [ ] PDF generation for reports
- [ ] Authentication system
- [ ] Blog/Resources section
- [ ] Video testimonials
- [ ] Multi-language support
- [ ] A/B testing framework

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
