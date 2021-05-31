import React, { useEffect } from 'react'
import { useParams, useHistory  } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CountryDetail = () => {

    const { id } = useParams()

    const history = useHistory()

    const countries = useSelector((state) => state.countryReducer.countries)

    const country = countries.find((country) => country.alpha3Code === id)
    console.log(country)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const onBackPress = () => {
        history.goBack()
    }

    if (!country){
        return (
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto current-stroke text-black dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-bold text-4xl text-center dark:text-white">Country cannot be found!</p>
        </div>
        
        )
    }

    const getCountryName = (code) => {

        return countries.find((country) => country.alpha3Code === code).name
    }

    return (
        <div className="container mx-auto p-8">
            
            <button className="dark:text-white font-medium dark:bg-gray-800 p-2 rounded-lg shadow-lg focus:outline-none hover:opacity-70" onClick={() => onBackPress()}>Go Back</button>
            
            <div className="grid lg:grid-cols-2 gap-y-4 gap-x-4 p-8">

                <div>   
                    <img className="w-4/5 object-cover mb-2 rounded-lg mx-auto" src={country.flag} alt={country.name}/>
                </div>

                <div className="">
                    <p className="text-3xl sm:text-5xl font-bold text-center lg:text-left dark:text-white">{country.name}</p>

                    <div className="grid grid-cols-2 gap-3 mt-6 ">

                        {country.capital && 
                            <>
                                <p className="font-medium dark:text-white">Capital</p>
                                <p className="dark:text-gray-300">{country.capital}</p>
                            </>
                        }


                        <p className="font-medium dark:text-white">Population</p>
                        <p className="dark:text-gray-300">{country.population.toLocaleString()}</p>

                        {country.region && 
                            <>
                                <p className="font-medium dark:text-white">Region</p>
                                <p className="dark:text-gray-300">{country.region}</p>
                            </>
                        }

                        {country.subregion && 
                            <>
                                <p className="font-medium dark:text-white">Sub-region</p>
                                <p className="dark:text-gray-300">{country.subregion}</p>
                            </>
                        
                        }

                        {country.callingCodes && 
                            <>
                                <p className="font-medium dark:text-white">{country.callingCodes.length > 1 ? "Calling Codes" : "Calling Code"}</p>
                                <div>
                                    {country.callingCodes.map((code) => <p className="dark:text-gray-300" key={code}>#{code}</p>)}
                                </div>
                            </>             
                        }


                        <p className="font-medium dark:text-white">Latitude, Longitude</p>
                        <div>
                            <p className="dark:text-gray-300">{country.latlng[0].toFixed(4)}°, {country.latlng[1].toFixed(4)}°</p>
                        </div>

                        <p className="font-medium dark:text-white">{country.currencies.length > 1 ? "Currencies" : "Currency"}</p>
                        <div>
                                {country.currencies.map((currency) => <p className="dark:text-gray-300" key={currency.code}>{currency.name} ({currency.code}) {currency.symbol}</p>)}
                        </div>

                        <p className="font-medium dark:text-white">Languages</p>
                        <div>
                            {country.languages.map((language) => <p className="dark:text-gray-300" key={language.iso639_1}>{language.name}</p>)}
                        </div>

                        {country.borders.length > 0 && 

                            <>
                                <p className="font-medium dark:text-white">Borders</p>
                                <div className="">
                                    {country.borders.map((border) => <p className="dark:text-gray-300" key={border}>{getCountryName(border)}</p>)}
                                </div>
                            </>
                        
                        }
                        
                     
                    </div>


                </div>

              

            </div>
        
            
        </div>
    )
}

export default CountryDetail
