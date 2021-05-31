import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { request } from '../api/countries'

const initialState = {
    countries: [],
    filteredCountries: [],
    query: '',
    option: '',
    status: null
}


export const getCountries = createAsyncThunk("countries/all", 
    async () => {

        return request('all')
                .then((res) => {
                    return res.data})
    }
)

export const countrySlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        filterByName(state, action){

            //If query is the same do nothing, no change needs to be dispatched
            if (state.query === action.payload.query){
                return
            }

            if (action.payload.query){

                //Check if a filter is applied already e.g. Africa
                if (state.option){
                    state.filteredCountries = state.countries.filter((country) => country.region === state.option && country.name.toLowerCase().includes(action.payload.query.toLowerCase()))
                }

                //No filter, this means you are filtering from the entire list
                else{
                    state.filteredCountries = state.countries.filter((country) => country.name.toLowerCase().includes(action.payload.query.toLowerCase()))

                }

            }

            //If query is empty... set filtered --> countries
            else {
                
                //Check if an option is applied if so show list only with option
                if (state.option){
                    state.filteredCountries = state.countries.filter((country) => country.region === state.option)
                }

                else {
                    state.filteredCountries = state.countries
                }

            }


            state.query = action.payload.query

        },

        filterByRegion(state, action) {

            //If the option is the same, don't do anything 
            if (state.option === action.payload.option){
                return
            }

            //If region is empty (all)??
            if (action.payload.option){
                 //Has Query means you are filtering the filtered list
                 if (state.query){
                    state.filteredCountries = state.countries.filter((country) => country.region === action.payload.option && country.name.toLowerCase().includes(state.query.toLowerCase()))
                }

                //No query, means you are filtering the full list
                else {
                    state.filteredCountries = state.countries.filter((country) => country.region === action.payload.option)
                }
            }

            //If region is empty
            else {

                //Check if query exists, filter by query only
                if (state.query){
                    state.filteredCountries = state.countries.filter((country) => country.name.toLowerCase().includes(state.query))
                }

                else {
                    state.filteredCountries = state.countries
                }

            }

       

            state.option = action.payload.option

        }
    },
    extraReducers: builder => {

        builder.addCase(getCountries.pending, state => {
            console.log("Loading...")
            state.status = 'loading'
        })
        
        builder.addCase(getCountries.fulfilled, (state, action) => {
            console.log("Success")
            state.countries = action.payload
            state.filteredCountries = action.payload
            

            state.status = 'success'
        })

        builder.addCase(getCountries.rejected, (state) => {
            console.log("Failed")
            state.status = 'failed'
        })

    }
})

//Export actions
export const { filterByName, filterByRegion } = countrySlice.actions

//Export Reducer
export default countrySlice.reducer


