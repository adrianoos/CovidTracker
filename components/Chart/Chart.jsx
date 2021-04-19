import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';


const Chart = ({ data, country}) =>{
    const [dailyData, setDailyData] = useState([])
    
    useEffect(() => {
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length ? 
        (<Line data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
                data: dailyData.map(({ confirmed }) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
            },{
                data: dailyData.map(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor: 'rgb(187, 69, 69)',
                backgroundColor: 'grey',
                fill: true
            }]
        }}/>) : null
    ); 

    const barChart = (
        data.confirmed ?
        (<Bar
data={{
    labels: ['Infected', 'Recovered' , 'Deaths'],
    datasets: [{
        label: 'People',
        backgroundColor: ['rgb(129, 115, 115)', 'rgb(113, 214, 45)', 'rgb(187, 69, 69)'],
        data:[data.confirmed.value, data.recovered.value, data.deaths.value]
    }]
}}
options={{
    legend: { display: false },
    title: { display: true, text: `Current state in ${country}` },
}}
       /> ):
        null
    )

    return (
        <div className={styles.container}>
            { country ? barChart : lineChart }
        </div>
    )
}

export default Chart;