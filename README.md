# Makkah Dental Clinic

A modern, full-featured dental clinic management web application built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Marketing Website
- Beautiful landing page with clinic information
- Services showcase with detailed treatment descriptions
- About page with team and clinic history
- Contact form for inquiries
- Online appointment booking system

### Patient Portal
- Easy appointment booking
- View upcoming and past appointments
- Personalized dashboard

### Admin Dashboard
- Manage all appointments
- Patient records management
- Daily appointment overview
- Secure admin authentication

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Testing:** Vitest, Playwright
- **Component Library:** Storybook
- **Authentication:** JWT-based with HTTP-only cookies

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/arqummalik1/MakkahDental.git
cd MakkahDental

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/       # Marketing pages
│   ├── (admin)/          # Admin dashboard
│   ├── (patient)/        # Patient portal
│   └── api/              # API routes
├── components/            # Reusable UI components
│   ├── atoms/            # Basic elements (Button, Input, etc.)
│   ├── molecules/        # Composite components
│   └── organisms/        # Complex components (Navbar, Footer)
├── core/                  # Core utilities
├── design/                # Design tokens and theme
├── modules/               # Business logic modules
├── server/                # Server-side code
└── stores/                # State management
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run storybook` | Launch Storybook |

## Documentation

- [Backend Setup Guide](docs/BACKEND_SETUP_GUIDE.md) - Supabase integration
- [Architecture Overview](docs/ARCHITECTURE.md) - System design
- [Component API](docs/COMPONENT_API.md) - Component documentation
- [Style Guide](docs/STYLE_GUIDE.md) - Coding standards
- [Quality Process](docs/QUALITY_PROCESS.md) - Testing guidelines

## License

This project is for demonstration purposes.
