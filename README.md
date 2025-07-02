# React Cart App

A simple and scalable shopping cart application built with **React**, **Vite**, and **Context API**.

---

## Quick Start

cd react-cart-app
npm install
npm run dev


Project structure :

react-cart-app/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components (Header, Cart, ProductItem)
│   ├── context/         # Cart context and provider
│   ├── routes/          # Application routes
│   ├── styles/          # SCSS styles
│   ├── App.jsx          # Root component
│   └── main.jsx         # ReactDOM entry point
├── package.json
└── vite.config.js

Architectural Decisions:

Vite for blazing-fast development and optimized builds.
Context API for lightweight global state management (cart).
SCSS for scoped and maintainable styling.
Component-based structure for reusability and testability.
ESLint + Prettier for consistent code formatting and linting.