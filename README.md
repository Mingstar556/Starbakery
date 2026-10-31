# Star Bakery — Public Luxury Storefront

An aristocratic artisanal bakery website celebrating heritage sourdough and French viennoiserie, styled in an Architectural Sketchbook aesthetic with tactile frosted glass.

Connected in real-time to a Supabase PostgreSQL database managed by the [Star Bakery Admin Panel](https://github.com/Mingstar556/StarbakeryAdmin).

## Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion & Lenis smooth scroll
- **Database**: Supabase / PostgreSQL (with real-time updates)

## Getting Started

1. Clone repository:
   ```bash
   git clone https://github.com/Mingstar556/Starbakery.git
   cd Starbakery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   Copy `.env.example` to `.env.local` and add your Supabase credentials:
   ```bash
   cp .env.example .env.local
   ```

4. Run locally:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.
