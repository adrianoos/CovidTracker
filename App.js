import React, { useState, useEffect } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api/index';
import './App.css';

const App = () => {
  const [ data, setData ] = useState([''])
  const [ country, setCountry ] = useState('')
 
const startUpfetch = async () =>{
  const response = fetchData()
  const data = await response
  setData(data)
}
 const  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country)
    setData(fetchedData)
    setCountry(country)
  };

useEffect(() => {
  startUpfetch() 
}, [])

  return (
  <div className='container'>
    <img className='imgLogo' src={'https://lh3.googleusercontent.com/proxy/NRHZSkmmJF2CMWcM1Z9khWHSin8737viReQ_L7CSGozkj9jjWCNMFB4qOn7UpH7wutVanS4kAxjDScn4ItF5Rxi-RhOumMYyiK6v3SHJ0XZy_4bavtVS2vwWKA'}></img>
    <Cards data={data}/>
    <CountryPicker handleCountryChange={handleCountryChange}/>
    <Chart data={data} country={country}/>
  </div>
  );
  
}

export default App;