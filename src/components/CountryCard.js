import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({ country }) => {
    return (
        <Link to={`/country/${country.alpha3Code}`} className="p-4 rounded-lg shadow-lg w-full hover:opacity-50 dark:bg-gray-800">
            <img className="h-24 w-48 object-cover mb-2 rounded-lg mx-auto" src={country.flag} alt={country.name}/>

            <span className="block text-lg font-bold text-center dark:text-white">{country.name}</span>
            <span className="block text-gray-400 text-center dark:text-gray-300">{country.region ? country.region : "No Region"}</span>

        </Link>
    )
}

export default CountryCard
