# 💪 GymSite - Modern Gym Management Website

A stunning, responsive gym website built with React, Tailwind CSS, and Framer Motion. Features a beautiful dark theme with neon accents, class booking system, trainer profiles, and member dashboard.

## ✨ Features

### 🎨 Modern Design
- **Dark Theme** with neon cyan, purple, and gold accents
- **Glassmorphism effects** with backdrop blur
- **Smooth animations** and micro-interactions using Framer Motion
- **Fully responsive** design (mobile, tablet, desktop)
- **Gradient backgrounds** and glowing effects

### 🏋️ Fitness Features
- **Class Scheduling**: Browse and filter fitness classes by type, level, and time
- **Booking System**: Reserve spots in classes with real-time availability
- **Member Dashboard**: Track booked classes and upcoming sessions
- **Trainer Profiles**: Discover certified trainers with specializations and ratings
- **Membership Plans**: Flexible pricing tiers (Basic, Pro, Elite)

### 📱 Pages
- **Home**: Hero section with stats, features, and membership showcase
- **Classes**: Filterable class directory with instructor details
- **Trainers**: Professional trainer profiles with certifications
- **Services**: Detailed service offerings and why choose us section
- **Dashboard**: Member booking history and statistics
- **About, Features, Exercise, Contact, Get Started**: Additional pages

## 🛠️ Tech Stack

- **React 18.3** - UI library
- **Vite 8** - Build tool and dev server
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Framer Motion 11** - Animation library
- **React Router DOM 6.14** - Client-side routing
- **React Icons 5** - Icon library
- **date-fns 2.30** - Date formatting utilities

## 📦 Installation

1. **Clone the repository**
   ```bash
   cd GymSite-react/GymSite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 Customization

### Colors
Edit the color variables in `tailwind.config.js`:
```js
colors: {
  neon: {
    cyan: '#00d4ff',    // Primary accent
    purple: '#a370f7',  // Secondary accent
    pink: '#ff0080',    // Tertiary accent
    gold: '#ffd700',    // Gold accent
  }
}
```

### Fonts
Modify font settings in `tailwind.config.js`:
```js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Space Mono', 'monospace'],
}
```

### Classes & Content
Update mock data in component files:
- `src/pages/Classes.jsx` - Class listings
- `src/pages/Trainers.jsx` - Trainer information
- `src/pages/Services.jsx` - Service descriptions

## 🎯 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Main navigation
│   ├── Button.jsx          # Reusable button component
│   └── Card.jsx            # Reusable card component
├── pages/
│   ├── home/
│   │   └── Home.jsx        # Hero & features
│   ├── Classes.jsx         # Class directory
│   ├── Trainers.jsx        # Trainer profiles
│   ├── Dashboard.jsx       # Booking dashboard
│   ├── services/
│   │   └── Services.jsx    # Services & pricing
│   ├── about/              # About page
│   ├── features/           # Features page
│   └── exercise/           # Exercise page
├── layouts/
│   ├── RootLayout.jsx      # Root layout with Navbar
│   ├── Contact.jsx         # Contact form
│   └── GetStarted.jsx      # Signup page
├── BookingContext.jsx      # Global booking state
├── App.jsx                 # Main app component
├── index.css               # Global styles
└── main.jsx                # Entry point
```

## 🚀 Features in Detail

### Booking System
- Context API for global state management
- Add/remove bookings functionality
- Duplicate prevention
- Real-time capacity tracking

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interface
- Optimized navigation

### Animations
- Page transitions
- Hover effects on buttons and cards
- Scroll animations (fade-in, slide-up)
- Gradient animations
- Smooth transitions throughout

## 🔧 Configuration

### Tailwind Config (`tailwind.config.js`)
- Dark theme palette
- Neon color accents
- Custom animations (pulse-neon, float, etc.)
- Extended spacing and sizing
- Glass morphism effects

### PostCSS Config (`postcss.config.js`)
- Tailwind CSS processing
- Autoprefixer for browser compatibility

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Performance Optimization

- Lazy loading images
- Code splitting with React Router
- Optimized animations
- CSS utility classes (Tailwind)
- Minimal JS bundle size

## 🌟 Future Enhancements

- [ ] User authentication (login/signup)
- [ ] Payment integration
- [ ] Email notifications
- [ ] Advanced workout tracking
- [ ] Nutrition planning features
- [ ] Social features (group challenges)
- [ ] Admin dashboard
- [ ] Mobile app version

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For questions or support, please contact us at support@gymsite.com

---

**Built with ❤️ by GymSite Team**
