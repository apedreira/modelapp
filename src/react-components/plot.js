import React, { useState } from 'react';
import Plot from 'react-plotly.js';

// https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks
//Función que transforma los inputs (string) a un array de floats
const strToArr = (str) => {
  return str.split(",").map(item => parseFloat(item, 10))
}

/*Función matemática de ejemplo, multiplica cada número del array numérico x2
const mathFunct = (nt, p1) => {
  return intArray.map(num => Math.log10(intArr)*p1)
}*/
// 0.018,0.052,0.427,1.092,1.628,2.11,2.58,2.55,2.575,2.495,2.305
//0,2,4,8,12,16,20,24,30,36,48

//Función matemática de ejemplo, multiplica cada número del array numérico x2
const mathFunct = (ntArr, times, charge, mu, lam) => {

  let result = []
  let value;
  let result2 = []
  let value2;
  for (let i = 0; i < times.length; i++) {
    value = Math.log10(ntArr[0]) + (charge / (1 + Math.exp((4 * mu / charge) * (lam - times[i]) + 2)))
    value2 = Math.log10(ntArr[i])
    result.push(value)
    result2.push(value2)
  }
  return [result, result2]
}


const MyPlot = () => {

  const [xAxis, setxAxis] = useState()
  const [yAxis, setyAxis] = useState()
  const [log10Nt, setlog10Nt] = useState()
  const [growthRate, setgrowthRate] = useState()
  const [carrCapacity, setcarrCapacity] = useState()
  const [lagPhase, setlagPhase] = useState()
  const [plotData, setPlotData] = useState({ x: xAxis, y: yAxis, z: log10Nt })

  //Plotea el resultado de aplicar la función matemática usando los datos introducidos por el usuario
  const handleClick = () => {
    let xAxisSplitted = strToArr(xAxis)
    let yAxisSplitted = strToArr(yAxis)
    let c = carrCapacity
    let mu = growthRate
    let lam = lagPhase
    let foo = mathFunct(yAxisSplitted, xAxisSplitted, c, mu, lam)
   let log10Nt=foo[1]
    setPlotData({ x: xAxisSplitted, y: foo[0], z:log10Nt })
    console.log(yAxisSplitted)

  };

  //Cambia el valor de los ejes cuando se modifica un input
  const handleInputChange = (event) => {
    switch (event.target.name) {
      case 'xInput':
        setxAxis(event.target.value);
        break;
      case 'yInput':
        setyAxis(event.target.value)
        break;
      case 'muInput':
        setgrowthRate(event.target.value)
        break;
      case 'kInput':
        setcarrCapacity(event.target.value)
        break;
      case 'lamInput':
        setlagPhase(event.target.value)
        break;
      default:
        console.log("algo no fue bien")
    }

  };

  let traces =
  {
    x: plotData.x,
    y: plotData.y,
    type: 'scatter',
    name: 'Logistic Model output'

  }
  let traces2 =
  {
    x: plotData.x,
    y: plotData.z,
    type: 'scatter',
    name: 'Log10(N)'
  }

  return (
    <>
      <label>
        OD or N (Values separated by comma):
        <textarea name="yInput" value={yAxis} onChange={handleInputChange} />
      </label>
      <br></br>
      <label>
        Time (Values separated by comma):
        <textarea name="xInput" value={xAxis} onChange={handleInputChange} />
      </label>
      <br></br>
      <label>
        Growth rate (μ):
        <input name="muInput" value={growthRate} onChange={handleInputChange} />
      </label>
      <br></br>
      <label>
        Carrying capacity (K):
        <input name="kInput" value={carrCapacity} onChange={handleInputChange} />
      </label>
      <br></br>
      <label>
        Lag phase duration (λ):
        <input name="lamInput" value={lagPhase} onChange={handleInputChange} />
      </label>
      <button onClick={handleClick}>MODEL!</button>
      <p> </p>
      <Plot
        data={[traces, traces2]}
      />
    </>
  );
}

export default MyPlot