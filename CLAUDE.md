# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is "Gericht" - a modern React restaurant website built with Create React App. It's a single-page application showcasing a premium restaurant experience with multiple sections including header, about, menu, chef, gallery, awards, and contact information.

## Development Commands
- **Start development server**: `npm start` (opens at http://localhost:3000)
- **Build for production**: `npm build`
- **Run tests**: `npm test`
- **Lint code**: ESLint is configured with Airbnb config, run via `npx eslint src/`

## Project Architecture

### Component Structure
The project follows a clear separation between `components/` (reusable UI components) and `container/` (page sections):

**Components** (`src/components/`):
- `Navbar/` - Responsive navigation with hamburger menu
- `SubHeading/` - Decorative section headings with spoon image
- `MenuItem/` - Menu item display (title, price, tags)
- `Footer/` - Footer components (Newsletter, FooterOverlay)

**Containers** (`src/container/`):
- `Header/` - Hero section
- `AboutUs/` - Restaurant history and about section
- `Menu/` (SpecialMenu) - Dynamic wine and cocktail menu
- `Chef/` - Chef's word and signature
- `Intro/` - Video introduction section
- `Laurels/` - Awards and recognitions
- `Gallery/` - Interactive photo gallery
- `FindUs/` - Contact and location information
- `Footer/` - Main footer with contact details

### Data Management
- Static content is stored in `src/constants/data.js` (wines, cocktails, awards arrays)
- Images are centralized in `src/constants/images.js`
- No external API calls or state management library used

### Styling
- CSS modules approach with component-specific CSS files
- Global styles in `src/index.css` and `src/App.css`
- Uses custom fonts and consistent color palette
- Fully responsive design

### Key Technologies
- React 17
- React Icons for iconography
- CSS Modules for styling
- ESLint with Airbnb configuration (customized rules in `.eslintrc.js`)

### File Import Patterns
- Components and containers use index.js barrel exports
- Images imported through constants/images.js
- Data imported through constants/data.js

When making changes, follow the existing patterns of component organization and CSS module naming conventions.