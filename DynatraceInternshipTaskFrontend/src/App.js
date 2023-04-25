import './App.css';
import { useRef, useState } from 'react'
import axios from 'axios'


function App() {
  const apiUrl = 'http://localhost:8080/exchange'
  const [result, setResult] = useState('result will be here')
  const [currencyCode, setCurrencyCode] = useState()
  const [date, setDate] = useState()
  const [numberOfLastQuotations, setNumberOfLastQuotations] = useState()

  const currencyRef = useRef()
  const dateRef = useRef()
  const numberRef = useRef()



  function modifyCurrencyCode() {
    let choice = currencyRef.current.value
    setCurrencyCode(choice)
  }

  function modifyDate() {
    let choice = dateRef.current.value
    setDate(choice)
  }
  

  function modifyNumberOfLastQuotations() {
    let choice = numberRef.current.value
    setNumberOfLastQuotations(choice)
  }

  function getAverageExchangeRate() {
    axios.get(apiUrl + '/' + currencyCode + '/' + date)
    .then(response => {
      setResult('Average exchange rate: ' + response.data)
    })
    .catch(error => {
      console.error(error)
    })

  }

  function getMaxAndMin() {
    axios.get(apiUrl + '/last/average-rate/' + currencyCode + '/' + numberOfLastQuotations)
    .then(response => {
      setResult('Max: '+ response.data.max + ' Min: ' + response.data.min)
    })
    .catch(error => {
      console.error(error)
    })

  }

  function getSpread() {
    axios.get(apiUrl + '/last/spread/' + currencyCode + '/' + numberOfLastQuotations)
    .then(response => {
      setResult('Major difference: ' + response.data)
    })
    .catch(error => {
      console.error(error)
    })

  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Dynatrace Internship Task Front</h1>
        <label>currency code</label>
        <input key={0} type='text' placeholder='GBP' ref={currencyRef} onChange={modifyCurrencyCode}></input>
        <label>date</label>
        <input key={1} type='text' placeholder='2023-01-02' ref={dateRef} onChange={modifyDate}></input>
        <label>number of last quotations</label>
        <input key={2} type='number' ref={numberRef}  onChange={modifyNumberOfLastQuotations}></input>

        <div>
          <button onClick={getAverageExchangeRate}>Get average exchange rate</button>
          <button onClick={getMaxAndMin}>Get maximum and minimum average exchange value</button>
          <button onClick={getSpread}>Get major difference spread</button>
        </div>

        <div>
          {result}
        </div>

      </header>
    </div>
  );
}

export default App;
