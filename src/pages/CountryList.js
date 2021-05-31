import React from 'react'
import CountryCard from '../components/CountryCard'
import { useSelector, useDispatch } from 'react-redux'
import { filterByName, filterByRegion } from '../redux/countrySlice'

const CountryList = () => {

    const dispatch = useDispatch()

    const countries = useSelector((state) => state.countryReducer.filteredCountries)
    const query = useSelector((state) => state.countryReducer.query)
    const option = useSelector((state) => state.countryReducer.option)


    if (!countries){
        return (

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto current-stroke text-black dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-bold text-4xl text-center dark:text-white">No Countries!</p>

        </div>

        )
    }

    return (
        <div className="container mx-auto">

            <div className="flex justify-between px-4 pb-4">

                <div className="flex py-2 px-4 rounded-lg shadow w-1/2 md:w-2/5 items-center dark:bg-gray-800">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="#ABABAD">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>

                    <input
                        id="query"
                        className="outline-none w-full dark:bg-gray-800"
                        style={{color: "#ABABAD"}}
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => dispatch(filterByName({query: e.target.value }))}
                        type="search"
                    />
                </div>

                <select id="option" className="outline-none cursor-pointer py-2 px-4 rounded-lg shadow dark:bg-gray-800 dark:text-gray-400 hover:opacity-70" 
                        onChange={(e) => dispatch(filterByRegion({option: e.target.value}))} value={option}>
                    <option value="" placeholder="Filter">All</option>
                    <option value="Africa" placeholder="Africa">Africa</option>
                    <option value="Americas" placeholder="Americas">America</option>
                    <option value="Asia" placeholder="Asia">Asia</option>
                    <option value="Europe" placeholder="Europe">Europe</option>
                    <option value="Oceania" placeholder="Oceania">Oceania</option>
                    <option value="Polar" placeholder="Polar">Polar</option>


                </select>

            </div>

            <div className="grid sm:grids-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-4">
                {countries.map((country) => <CountryCard key={country.alpha2Code} country={country}/>)}
            </div>
        </div>
    )
}

export default CountryList
