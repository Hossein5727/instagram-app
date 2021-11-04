import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReverseTimer from './Examples/Example3/ReverseTimer'
import WelcomePage from './Examples/Example3/WelcomePage'

function App3() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ReverseTimer} />
                    <Route  path="/welcomePage" component={WelcomePage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App3
