import React, { useState } from 'react';

// TemperatureInput Component
function TemperatureInput({ temperature, scale, onTemperatureChange }: {temperature: string, scale: 'c' | 'f', onTemperatureChange: any}) {
  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  const handleChange = (e: any) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
}

// BoilingVerdict Component
function BoilingVerdict({ celsius }: {celsius: number}) {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}


// Lifting state up allows the Calculator component to control the temperature state, ensuring that both the Celsius and Fahrenheit inputs are always synchronized.
function Calculator() {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');
  
    const handleCelsiusChange = (temperature: string) => {
      setTemperature(temperature);
      setScale('c');
    };
  
    const handleFahrenheitChange = (temperature: string) => {
      setTemperature(temperature);
      setScale('f');
    };
  
    const tryConvert = (temperature: string, convert: any) => {
      const input = parseFloat(temperature);
      if (Number.isNaN(input)) {
        return '';
      }
      const output = convert(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
    };
  
    const toCelsius = (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9;
  
    const toFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;
  
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }

export default Calculator;
/*
"Lifting state up" is a common pattern in React where you move state to the closest common ancestor of two or more components that need to share the same state. This allows multiple components to access and modify the shared state through props, ensuring that the state is synchronized across those components.

Why Lift State Up?
Sometimes, two or more sibling components need to share information. If each component manages its own state independently, it can lead to inconsistencies. By lifting the state up to their common ancestor, you ensure that the state is consistent and can be passed down to each component as needed.


*/