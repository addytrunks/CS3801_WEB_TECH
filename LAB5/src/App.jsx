import { useEffect, useState } from "react"
import TemperatureInput from "./components/TemperatureInput"
import TemperatureDisplay from "./components/TemperatureDisplay";
import TemperatureControls from "./components/TemperatureControls";
import './App.css'

function App() {

  const [temperature, setTemperature] = useState(36);
  const [fahrToCelc, setfahrToCelc] = useState(false);

  function onChange(e) {
    setTemperature(e.target.value);
  }

  function increaseTemperature() {
    setTemperature((prevTemp) => prevTemp + 1)
  }
  function decreaseTemperature() {
    setTemperature((prevTemp) => prevTemp - 1)
  }
  
  function toggleTemperatureType() {
    setfahrToCelc((prevBool) => !prevBool);
  }

  useEffect(() => {
    // Converting from celsius to fahrenheit
    if (fahrToCelc == false) {
      const fahrenheit = (temperature * 9) / 5 + 32;
      setTemperature(fahrenheit);
    } 
    // Converting from fahrenheit to celsius
    else {
      
      const celsius = ((temperature - 32) * 5) / 9
      setTemperature(Number(celsius))
    }
  }, [fahrToCelc])
  return (
    <div className="container">
      {/* Heading */}
      <h2>Temperature Display and Converter</h2>

      {/* Temperature Input (Get the input in celsius)*/}
      <TemperatureInput fahrToCelc={fahrToCelc} temperature={temperature} onTemperatureChange={onChange} />

      {/* Temperature Controls (Increase/Decrease) */}
      <TemperatureControls onIncrease={increaseTemperature} onDecrease={decreaseTemperature} />


      {/* Temperature Display (Display in Fahreneheit) */}
      <TemperatureDisplay temperature={temperature} fahrToCelc={fahrToCelc} />

      <button onClick={toggleTemperatureType}>Switch to {fahrToCelc ? "Celsius" : "Fahrenheit"}</button>
    </div>
  )
}

export default App
