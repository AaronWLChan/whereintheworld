import axios from 'axios'

//https://restcountries.eu/#api-endpoints-all

const BASE_URL = "https://restcountries.eu/rest/v2"

function queryString(obj){
    return Object.entries(obj)
        .map(([index, val]) => `${index}=${val}`)
        .join('&')
}

export async function request(url, content = {}){

    let query = `${BASE_URL}/${url}?${queryString(content)}`

    console.log(query)
    
    return await axios.get(query)
                .catch((error) => {

                    if (error.response){
                        console.log(error.response.data)
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }

                    else if (error.request){
                        //Request made but no response
                        console.log(error.request)
                    }

                    else {
                        //Non API-related error
                        console.log(error.message)
                    }

                })
}