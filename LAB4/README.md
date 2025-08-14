# Lab 4 - React - Props and Components

This lab demonstrates the fundamentals of React component composition, props passing, and component hierarchy through a practical example of building categorized lists.

## Overview

This project showcases a React application that displays categorized lists using a hierarchical component structure. The application demonstrates two different types of lists:
- **Grocery List**: Contains fruits and vegetables with their prices
- **Animal List**: Contains animals with their scientific names and weights

## Learning Objectives

- Understanding React component hierarchy and composition
- Implementing props passing between parent and child components
- Using conditional rendering based on props
- Creating reusable components with flexible props

## Component Architecture

### Component Hierarchy
```
App (Root Component)
├── Category (Main category container)
│   ├── CategoryList (Sub-category container)
│   │   └── Item (Individual item display)
│   └── CategoryList (Another sub-category)
│       └── Item (Another individual item)
└── Category (Another main category)
    ├── CategoryList
    │   └── Item
    └── CategoryList
        └── Item
```

### Component Details

#### 1. **App Component** (`src/App.jsx`)
- **Role**: Root component that defines the overall application structure
- **Props**: None (root component)
- **Children**: Multiple `Category` components
- **Data**: Defines all the categories and items data inline

#### 2. **Category Component** (`src/components/Category.jsx`)
- **Role**: Main category container (e.g., "Grocery List", "Animal List")
- **Props**: 
  - `name`: String - The name of the category
  - `children`: React children - Contains CategoryList components
- **Rendering**: Displays category name as h1 and renders children in a ul

#### 3. **CategoryList Component** (`src/components/CategoryList.jsx`)
- **Role**: Sub-category container (e.g., "Fruits", "Vegetables", "Lion", "Zebra")
- **Props**:
  - `name`: String - The name of the sub-category
  - `children`: React children - Contains Item components
- **Rendering**: Displays sub-category name as h1 and renders children in a ul

#### 4. **Item Component** (`src/components/Item.jsx`)
- **Role**: Individual item display with conditional rendering
- **Props**:
  - `name`: String - The name of the item
  - `price`: Number - Price of grocery items (optional)
  - `weight`: Number - Weight of animals in kg (optional)
  - `type`: String - Type identifier ("Animal" or undefined for groceries)
- **Rendering**: Conditionally displays either:
  - For animals: "Name: {name} - Weight: {weight} kg"
  - For groceries: "Name: {name} - Price: {price}"

## Key Features Demonstrated

### 1. **Props Passing**
- Data flows from parent to child components through props
- Each component receives only the props it needs
- Props are destructured in function parameters for clean syntax

### 2. **Component Composition**
- Uses React children to compose components hierarchically
- Demonstrates nesting of components for logical data organization

### 3. **Conditional Rendering**
- Item component renders different content based on the `type` prop
- Shows flexibility in component design for handling different data types

### 4. **Reusable Components**
- Same components (Category, CategoryList, Item) are reused for different data types
- Demonstrates component reusability principle

## Technology Stack

- **React 19.1.1**: Modern React with latest features
- **Vite 7.1.0**: Fast build tool and dev server
- **ESLint**: Code linting and quality assurance

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Available Scripts

- `npm run dev`: Start development server with hot reload
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint for code quality checks

## File Structure

```
LAB4/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Category.jsx      # Main category component
│   │   ├── CategoryList.jsx  # Sub-category component
│   │   └── Item.jsx          # Individual item component
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx               # Root component
│   ├── App.css               # App-specific styles
│   ├── index.css             # Global styles
│   └── main.jsx              # React app entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── eslint.config.js          # ESLint configuration
```

## Learning Outcomes

After completing this lab, you should understand:

1. **Component Hierarchy**: How to structure React applications using nested components
2. **Props Flow**: How data flows from parent to child components through props
3. **Component Reusability**: How to create flexible components that work with different data
4. **Conditional Rendering**: How to render different content based on props
5. **React Composition**: How to use children props for component composition

