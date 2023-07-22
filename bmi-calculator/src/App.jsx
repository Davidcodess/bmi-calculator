import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'> 
        <h1> Body Mass <br/>
            Index Calculator 
          </h1>

        <p className='header-p'>  Better understand your weight in relation to your height using our 
          body mass index (BM) calculator. While BMI is not the sole determinant 
          of a healthy weight, it offers a valuable starting point to evaluate 
          your overall health and well-being.
        </p>

      </div>

      <div className='bmi-calculator-container'>
        <h3> Enter your details below</h3>

        <div className='unit-container'>
         <button>Metric</button>
         <button> Imperial</button>
        </div>
      </div>
    </>
  )
}

export default App
