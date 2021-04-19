import React, { useState, useEffect } from 'react';
import './App.css';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api/index';

const App = () => {
  const [ data, setData ] = useState([])
  const [ country, setCountry ] = useState('')
 
  
 const  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country)
    setData(fetchedData)
    setCountry(country)
  };

useEffect(() => {
  const fetchedData = fetchData()
    setData(fetchedData)
}, [])

  return (
  <div className='container'>
    <Cards data={data}/>
    <CountryPicker handleCountryChange={handleCountryChange}/>
    <Chart data={data} country={country}/>
  </div>
  );
  
}

export default App;
