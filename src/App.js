import React, { Component } from 'react';
import { fetchData } from './api'

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'

import styles from './App.module.css'

class App extends Component {

    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({data: fetchedData})
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards data={this.state.data} />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;