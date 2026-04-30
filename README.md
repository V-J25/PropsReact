# PropsReact

A React learning project focused on mastering **Props** - one of the most important concepts in React development. This template demonstrates how to pass data between React components using props in a modern development setup.

## About Props

Props (short for "properties") are how React components communicate with each other. They allow you to:
- Pass data from parent to child components
- Create reusable and flexible components
- Build component hierarchies with clear data flow

This project is designed to help you understand and practice working with props in React.

## Tech Stack

- **React 19** - Latest React framework with modern features
- **Vite** - Lightning-fast build tool and dev server
- **ESLint** - Code quality and consistency checks
- **Vite Plugins** - Support for both standard React and SWC compilation

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/V-J25/PropsReact.git
cd PropsReact
Install dependencies:
bash
npm install
Start the development server:
bash
npm run dev
The application will be available at http://localhost:5173

Available Scripts
npm run dev - Start the development server with HMR (Hot Module Replacement)
npm run build - Create an optimized production build
npm run lint - Run ESLint to check code quality
npm run preview - Preview the production build locally
Project Structure
Code
PropsReact/
├── src/
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── components/      # Reusable components
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
Learning Props
Key Concepts:
Passing Props - Send data from parent to child
jsx
<ChildComponent name="John" age={25} />
Receiving Props - Access props in child component
jsx
function ChildComponent({ name, age }) {
  return <h1>{name} is {age} years old</h1>;
}
Default Props - Provide fallback values
Prop Types - Validate prop data types
Destructuring - Extract props cleanly
Performance Considerations
This template uses Vite's fast refresh with HMR (Hot Module Replacement) for an excellent developer experience. The React Compiler is not enabled by default to maintain build performance, but can be added if needed.

ESLint Configuration
The project comes with ESLint rules for React and React Hooks to maintain code quality. For production applications, consider upgrading to TypeScript with type-aware lint rules.

Resources
React Documentation
Vite Guide
React Props Guide
ESLint
License
This project is open source and available under the MIT License.

Contributing
Feel free to fork this project and submit pull requests with improvements or additional learning examples.

