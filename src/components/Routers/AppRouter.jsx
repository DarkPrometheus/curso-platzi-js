import React from 'react'
import { Home } from '../Home'
import { Navbar } from '../Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Figuras } from '../Figuras/Figuras';
import { Descuentos } from './../Descuentos';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Route path="/Figuras" component={Figuras} />
            <Route path="/Descuentos" component={Descuentos} />
            <Route path="/Home" component={Home} />
            <Route exact path="/" component={Home} />
        </Router>
    )
}
