# Privtech Solutions Website

Modern, mobile-first website for Privtech Solutions Limited - an IT services company based in Lusaka, Zambia.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** Nodemailer (for contact form)
- **Deployment:** Vercel-ready

## Features

- Responsive, mobile-first design
- SEO optimized with metadata, OpenGraph, and JSON-LD structured data
- Server action for contact form submission
- Component-based architecture
- Accessible, semantic HTML
- Subtle African-inspired design patterns
- Excellent Lighthouse scores

## Project Structure

```
src/
├── app/
│   ├── actions/          # Server actions
│   │   └── contact.ts    # Contact form submission
│   ├── about/            # About page
│   ├── case-studies/     # Case studies listing
│   │   └── [slug]/       # Dynamic case study pages
│   ├── contact/          # Contact page
│   ├── services/         # Services page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page
├── components/
│   ├── forms/            # Form components
│   ├── layout/           # Header, Footer
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd privtech
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Edit `.env.local` with your SMTP configuration (optional for development):
   ```env
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=your-email@example.com
   SMTP_PASS=your-password
   RECIPIENT_EMAIL=sales@privtech.net
   ```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

The site will automatically deploy on every push to the main branch.

### Other Platforms

The site can be deployed to any platform supporting Node.js:

- **Netlify:** Add a `netlify.toml` configuration
- **Railway:** Connect your repository
- **DigitalOcean App Platform:** Deploy from GitHub

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SMTP_HOST` | SMTP server hostname | For email |
| `SMTP_PORT` | SMTP port (587 or 465) | For email |
| `SMTP_USER` | SMTP username/email | For email |
| `SMTP_PASS` | SMTP password | For email |
| `RECIPIENT_EMAIL` | Email to receive form submissions | Optional |
| `NEXT_PUBLIC_SITE_URL` | Production site URL | Optional |

## Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Green color palette
  },
  secondary: {
    // Orange/gold color palette
  },
}
```

### Content

- **Company Info:** Edit `src/app/layout.tsx` for metadata and JSON-LD
- **Services:** Update `src/app/services/page.tsx`
- **Case Studies:** Modify the `caseStudies` array in `src/app/case-studies/page.tsx`
- **Footer Links:** Edit `src/components/layout/Footer.tsx`

### Adding Pages

1. Create a new folder in `src/app/` (e.g., `src/app/new-page/`)
2. Add a `page.tsx` file with your page component
3. Export metadata for SEO

## Performance

The site is optimized for excellent Lighthouse scores:

- **Performance:** Minimal JavaScript, optimized images
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation
- **Best Practices:** Security headers, HTTPS
- **SEO:** Metadata, structured data, sitemap

## License

Copyright Privtech Solutions Limited. All rights reserved.
