import {useState} from "react";
import './App.css'

function App() {
  const [c, setCelsius] = useState(0)
  const [f, setFahrenheit] = useState(0)
  const [k, setKelvin] = useState(0)
  
  const updateCelsius = (e) => {
    setCelsius(e.target.value)
    setFahrenheit(e.target.value * 9/5 + 32)
    setKelvin(e.target.value * 1 + 273.15)
  }
  const updateFahrenheit = (e) => {
    setCelsius((e.target.value - 32) * 5/9)
    setFahrenheit(e.target.value)
    setKelvin((e.target.value - 32) * 5/9 + 273.15)
  }
  const updateKelvin = (e) => {
    setCelsius(e.target.value - 273.15)
    setFahrenheit((e.target.value - 273.15) * 9/5 + 32)
    setKelvin(e.target.value)
  }
  
  return (
    <>
      <h1 id="title">TEMPERATURE CONVERTER</h1>
      <div className="temps">
        <label>Celsius<input type="number" id="c" value={c} onChange={updateCelsius}/></label>
      </div>
        <hr/>

      <div className="temps">
        <label>Fahrenheit<input type="number" id="f" value={f} onChange={updateFahrenheit}/></label>
      </div>
        <hr/>

      <div className="temps">
        <label>Kelvin<input type="number" id="k" value={k} onChange={updateKelvin}/></label>
      </div>
    </>)
}

export default App