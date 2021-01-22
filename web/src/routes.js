import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import clients from './components/clients'
import editclient from './components/clients/editclient'
import createclient from './components/clients/createclient'
import login from './components/login'

import PrivateRoute from './services/wAuth';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
                <PrivateRoute path="/client" exact component={clients} />
                
                <PrivateRoute path="/client/create" exact component={createclient} />
                <PrivateRoute path="/client/:idClient" exact component={editclient} />

            </Switch>
        </BrowserRouter>
    )
}