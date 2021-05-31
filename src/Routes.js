import React from 'react'
import { Route, Switch } from 'react-router-dom'

import CountryList from '../src/pages/CountryList'
import CountryDetail from '../src/pages/CountryDetail'
import NotFound from './pages/NotFound'

const Routes = () => {
    return (
        
        <Switch>
            <Route exact path="/">
                <CountryList/>
            </Route>

            <Route path="/country/:id">
                <CountryDetail/>
            </Route>

            <Route path="*">
                <NotFound/>
            </Route>

        </Switch>
        
    )
}


export default Routes
