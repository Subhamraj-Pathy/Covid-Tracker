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