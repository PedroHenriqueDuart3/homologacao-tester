# Implementation Notes - Circular Gallery & CSS Migration

## Summary
Successfully implemented the CircularGallery component using OGL (WebGL library) and migrated the entire project from Tailwind CSS to pure CSS.

## Changes Made

### 1. New Components Created
- **CircularGallery.jsx** - 3D circular gallery with WebGL rendering using OGL library
- **CircularGallery.css** - Styles for the circular gallery

### 2. CSS Files Created
All components now have dedicated CSS files:
- `AnimationComponents.css`
- `BackgroundMusic.css`
- `ContractPage.css`
- `CounterSection.css`
- `DedicationSection.css`
- `FallingPetals.css`
- `Footer.css`
- `GallerySection.css`
- `HeroSection.css`
- `ProposalSection.css`
- `Index.css` (pages)
- `NotFound.css` (pages)

### 3. Updated Components
All components were updated to:
- Import their respective CSS files
- Replace Tailwind classes with custom CSS classes
- Maintain the same visual appearance and functionality

### 4. Gallery Section Update
- Replaced the traditional grid gallery with the CircularGallery component
- Configured with:
  - `bend={3}` - Creates the circular arc effect
  - `textColor="#8B4049"` - Wine color for text
  - `borderRadius={0.05}` - Rounded corners on images
  - `scrollEase={0.02}` - Smooth scrolling
  - `font="bold 30px serif"` - Custom font for captions

### 5. Dependencies Added
```json
{
  "@tanstack/react-query": "^5.0.0",
  "framer-motion": "^11.0.0",
  "jspdf": "^2.5.1",
  "lucide-react": "^0.468.0",
  "ogl": "^1.0.11",
  "react-router-dom": "^7.1.1"
}
```

### 6. Configuration Updates
- **vite.config.js**: Added path alias configuration for `@` imports
- **package.json**: Updated dependencies

## How the Circular Gallery Works

The CircularGallery component uses WebGL through the OGL library to create a 3D carousel effect:

1. **Rendering**: Uses WebGL canvas for hardware-accelerated rendering
2. **Bend Effect**: The `bend` parameter creates a circular arc by calculating positions using trigonometry
3. **Interaction**: 
   - Mouse drag to scroll
   - Mouse wheel to navigate
   - Touch support for mobile devices
4. **Animation**: Smooth transitions with configurable easing
5. **Text Labels**: Dynamic text textures rendered on canvas and applied to 3D planes

## CSS Architecture

The CSS follows a component-based architecture:
- Each component has its own CSS file
- CSS variables defined in `index.css` for consistent theming
- Responsive design with mobile-first approach
- No Tailwind dependencies

## Key CSS Variables
```css
--wine: hsl(350, 45%, 32%)
--rose-light: hsl(350, 60%, 92%)
--lavender: hsl(270, 30%, 88%)
--background: hsl(30, 45%, 97%)
--foreground: hsl(350, 25%, 18%)
```

## Usage

### To add your own images:
1. Place images in `src/assets/` folder
2. Update `src/pages/Index.jsx`:
```javascript
import yourImage from '@/assets/yourimage.jpg';

const galleryItems = [
  { src: yourImage, caption: 'Your Caption', type: 'image' },
  // ... more items
];
```

### To customize the gallery:
Edit the CircularGallery props in `GallerySection.jsx`:
```javascript
<CircularGallery 
  items={items}
  bend={3}              // Adjust curve intensity (0 = flat, higher = more curved)
  textColor="#8B4049"   // Change text color
  borderRadius={0.05}   // Adjust image corner rounding
  scrollEase={0.02}     // Adjust scroll smoothness (lower = smoother)
  font="bold 30px serif" // Change font
/>
```

## Build & Run

```bash
# Install dependencies
npm install --legacy-peer-deps

# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Notes
- The project uses placeholder images from picsum.photos
- Replace these with your actual images before deployment
- All Tailwind classes have been removed
- The visual design remains identical to the original
- Build size: ~800KB (main bundle)

## Browser Support
- Modern browsers with WebGL support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers with touch support
