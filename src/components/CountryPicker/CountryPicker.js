import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api'

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchCountriesFromAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchCountriesFromAPI()
    }, [setFetchedCountries])

    // handleCountryChange = () => {
    //     this.props
    // }

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value='global'>Global</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;