import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { About } from "./pages/About/About"
import { Main } from "./pages/Main/Main"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/main" exact>
                    <Main />
                </Route>
                <Redirect to="/home" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
