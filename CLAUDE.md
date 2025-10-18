# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is "La Chicha" - a modern React restaurant website built with Create React App, customized from the "Gericht" template. It's a single-page application showcasing a coastal Argentine restaurant experience with sections for header, about, menu, chef, gallery, awards, and contact information.

## Development Commands
- **Start development server**: `npm start` (opens at http://localhost:3000)
- **Build for production**: `npm run build`
- **Run tests**: `npm test`
- **Lint code**: ESLint is configured with Airbnb config, run via `npx eslint src/`

## Project Architecture

### Component Structure
The project follows a clear separation between `components/` (reusable UI components) and `container/` (page sections):

**Components** (`src/components/`):
- `Navbar/` - Responsive navigation with hamburger menu
- `SubHeading/` - Decorative section headings with spoon image
- `Menuitem/` (note: lowercase 'i') - Menu item display (title, price, tags)
- `GlassCard/` - Glass morphism card component
- `Footer/` - Contains Newsletter and FooterOverlay subcomponents

**Containers** (`src/container/`):
- `Header/` - Hero section
- `AboutUs/` - Restaurant history and about section
- `Menu/` (exported as SpecialMenu) - Dynamic main dishes and drinks menu
- `SushiSpecial/` - Special sushi section
- `Chef/` - Chef's word and signature
- `Intro/` - Video introduction section
- `Laurels/` - Awards and recognitions
- `Gallery/` - Interactive photo gallery
- `Findus/` (note: lowercase 'u') - Contact and location information
- `Footer/` - Main footer with contact details

### Data Management
- Static content in `src/constants/data.js`:
  - `mainDishes` (exported as `wines`) - Main menu items with Argentine dishes
  - `drinks` (exported as `cocktails`) - Drink menu including Fernet, Malbec, craft beer
  - `awards` - Awards and media recognition
- All images centralized in `src/constants/images.js`
- Custom "La Chicha" branding: `delfi.jpg`, `proof.jpg`, `video.mp4`, `logo.jpg` in `assets/chicha/`
- No external API calls or state management library used

### Styling
- Component-specific CSS files (not CSS Modules - standard CSS imports)
- Global styles in `src/index.css` and `src/App.css`
- Gradient background applied to main content sections via `gradient-background` class in App.js
- Uses custom fonts and consistent color palette
- Fully responsive design

### Key Technologies
- React 17
- React Icons for iconography
- Create React App (react-scripts ^5.0.1)
- ESLint with Airbnb configuration (customized rules in `.eslintrc.js`)

### File Import Patterns
- Components and containers use `index.js` barrel exports for clean imports
- Images imported through `constants/images.js`
- Data imported through `constants/data.js` (note: mainDishes/drinks are exported as wines/cocktails)
- All components imported in App.js from their respective barrel exports

### ESLint Configuration Notes
Custom rules disabled in `.eslintrc.js`:
- `import/extensions: 0` - No extension required for imports
- `react/prop-types: 0` - PropTypes validation disabled
- `import/prefer-default-export: 0` - Named exports allowed
- `react/jsx-filename-extension: 0` - JSX allowed in .js files
- Multiple accessibility rules relaxed for design flexibility

When making changes, follow the existing patterns of component organization and CSS naming conventions.