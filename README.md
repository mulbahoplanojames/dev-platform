# Dev Platform

A modern, component-based web application built with Vite and Tailwind CSS, featuring dynamic content loading and a responsive design.

## 🚀 Features

- **Modern Stack**: Built with Vite for fast development and optimized builds
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Built-in dark/light theme support
- **Component-Based Architecture**: Modular components for better maintainability
- **Dynamic Content Loading**: Asynchronous loading of components and scripts
- **Weather Integration**: Real-time weather information display
- **Pokémon API Integration**: Interactive Pokémon data visualization

## 🛠️ Tech Stack

- **Frontend**:
  - HTML5, CSS3, JavaScript (ES6+)
  - [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
  - [Google Fonts](https://fonts.google.com/) - Typography
  - [Material Icons](https://fonts.google.com/icons) - Icon library

## 📦 Prerequisites

- Node.js (v14+)
- pnpm (recommended) or npm

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dev-platform
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

4. **Build for production**

   ```bash
   pnpm build
   # or
   npm run build
   ```

   The production build will be available in the `dist/` directory.

5. **Preview production build**
   ```bash
   pnpm preview
   # or
   npm run preview
   ```

## 🏗️ Project Structure

```
dev-platform/
├── public/           # Static files
├── src/
│   ├── sections/     # HTML components
│   ├── style.css     # Main stylesheet
│   └── js/           # JavaScript modules
├── index.html        # Main HTML entry point
├── package.json      # Project configuration
├── pnpm-lock.yaml    # Dependency lock file
└── vite.config.ts    # Vite configuration
```

## 🌟 Features in Detail

### Component System

- **Dynamic Loading**: Components are loaded asynchronously for better performance
- **Modular Design**: Each component is self-contained and reusable
- **Responsive**: Adapts to different screen sizes and devices

### Performance

- **Code Splitting**: JavaScript is split into smaller chunks for faster loading
- **Lazy Loading**: Components are loaded only when needed
- **Optimized Assets**: Built-in optimization for production builds

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tooling
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [PokeAPI](https://pokeapi.co/) for the Pokémon data
- [OpenWeatherMap](https://openweathermap.org/) for weather data

---

Made with ❤️ by TG-C13-ULK
