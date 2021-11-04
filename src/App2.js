import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import InfoStory from './Examples/Instagram/InfoStory'
import ImageSlider from './Examples/Instagram/ImageSlider'
import NavbarInstagram from './Examples/Instagram/NavbarInstagram'
import ProfileInstagram from './Examples/Instagram/ProfileInstagram'

function App2() {
    return (
        <div className="bg-gray-50 ">
            <BrowserRouter>
                <NavbarInstagram />
                <Switch>
                    <Route exact path="/" component={ImageSlider} />
                    <Route path="/info/:name" component={InfoStory} />
                    <Route exact path="/profile" component={ProfileInstagram} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App2
