# Temperature Converter Web Application

A React-based temperature conversion web application that allows users to convert between Celsius and Fahrenheit with interactive controls to increase or decrease temperature values.

## 🌡️ Features

- **Temperature Conversion**: Convert between Celsius and Fahrenheit
- **Interactive Controls**: Increase/decrease temperature with buttons
- **Real-time Display**: Live temperature display with conversion
- **Unit Toggle**: Switch between Celsius and Fahrenheit modes
- **Responsive Design**: Clean and intuitive user interface

## 🛠️ Technologies Used

- **React 19.1.1** - Frontend library
- **Vite 7.1.2** - Build tool and development server
- **CSS3** - Styling
- **JavaScript (ES6+)** - Programming language

## 📁 Project Structure

```
src/
├── App.jsx                    # Main application component
├── App.css                    # Application styles
├── main.jsx                   # React entry point
├── index.css                  # Global styles
├── components/
│   ├── TemperatureInput.jsx   # Temperature input display component
│   ├── TemperatureDisplay.jsx # Temperature conversion display component
│   └── TemperatureControls.jsx # Increase/decrease controls component
└── assets/
    └── react.svg              # React logo
```

## 🏗️ Component Architecture

### Component Hierarchy

```
App (Root Component)
├── TemperatureInput
├── TemperatureControls
└── TemperatureDisplay
```

### Component Details

#### 1. **App Component** (Root)
- **State Management**: 
  - `temperature` - Current temperature value
  - `fahrToCelc` - Boolean flag for temperature unit mode
- **Functions**:
  - `onChange()` - Handles temperature input changes
  - `increaseTemperature()` - Increments temperature by 1
  - `decreaseTemperature()` - Decrements temperature by 1
  - `toggleTemperatureType()` - Switches between Celsius and Fahrenheit

#### 2. **TemperatureInput Component**
- **Purpose**: Displays current temperature with unit indicator
- **Props**:
  - `temperature` (number) - Current temperature value
  - `onTemperatureChange` (function) - Handler for temperature changes
  - `fahrToCelc` (boolean) - Temperature unit mode flag

#### 3. **TemperatureControls Component**
- **Purpose**: Provides buttons to increase/decrease temperature
- **Props**:
  - `onIncrease` (function) - Handler for temperature increment
  - `onDecrease` (function) - Handler for temperature decrement

#### 4. **TemperatureDisplay Component**
- **Purpose**: Shows converted temperature in the opposite unit
- **Props**:
  - `temperature` (number) - Current temperature value
  - `fahrToCelc` (boolean) - Temperature unit mode flag

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd LAB5
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 How It Works

1. **Initial State**: The app starts with a default temperature of 36°C
2. **Temperature Input**: Displays the current temperature (disabled input for display purposes)
3. **Controls**: Use + and - buttons to adjust temperature by 1 degree
4. **Conversion**: The app automatically converts and displays the temperature in the opposite unit
5. **Unit Toggle**: Click the toggle button to switch between Celsius and Fahrenheit modes

### Conversion Formulas

- **Celsius to Fahrenheit**: `(C × 9/5) + 32`
- **Fahrenheit to Celsius**: `(F - 32) × 5/9`

## 🎨 Design Principles

- **Functional Components**: Uses only React functional components with hooks
- **Props**: Data flow managed through props passing
- **useState Hook**: State management using React's useState hook
- **Component Separation**: Clear separation of concerns across components
- **Responsive Design**: CSS designed for various screen sizes