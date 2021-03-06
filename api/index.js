import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{
    let changeUrl = url

    switch(true) {
        case country !== undefined:
        changeUrl=`${url}/countries/${country}`
        break;
    }
 
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeUrl) 

        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }

        return modifiedData
    } catch (error) {
        
    }
};

export const fetchDailyData = async () =>{
    try {
        const {data} = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountries = async () =>{
    try {
        const response = await axios.get(`${url}/countries`)
        const modifiedResponse = {
            response: response.data.countries.map(country => country.name)
        }

        return modifiedResponse

    } catch (error) {
        console.log(error)
    }
};