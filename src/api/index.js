import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {
        const respose = await axios.get(url)
        
        const apiData = {
            confirmed: respose.data.confirmed,
            recovered: respose.data.recovered,
            deaths: respose.data.deaths,
            lastUpdate: respose.data.lastUpdate
        }

        return apiData
    }
    catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const respose = await axios.get(`${url}/daily`)    

        const apiData = respose.data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return apiData
    }
    catch (error) {
        
    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`)    

        return countries.map((country) => country.name)
    }
    catch (error) {
        
    }
}