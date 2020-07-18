import React, { Component } from 'react';
import { fetchData } from './api'

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'

// import Image from './images/2.jpg'
import Image from './images/Logo.png'

import styles from './App.module.css'

class App extends Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
        console.log(country)
        const fetchedData = await fetchData(country)
        this.setState({data: fetchedData, country: country})
    }

    render() {
        return (
            <div className={styles.container}>
                <img src={Image} className={styles.image} alt='Covid-19' />
                <Cards data={this.state.data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={this.state.data} country={this.state.country} />
            </div>
        );
    }
}

export default App;