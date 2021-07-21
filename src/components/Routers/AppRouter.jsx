import React from 'react'
import { Home } from '../Home'
import { Navbar } from '../Navbar';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Figuras } from '../Figuras/Figuras';
import { Descuentos } from './../Descuentos';
import { Estadistica } from './../Estadistica';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Route path="/Figuras" component={Figuras} />
            <Route path="/Descuentos" component={Descuentos} />
            <Route path="/Estadistica" component={Estadistica} />
            <Route path="/Home" component={Home} />
            <Route exact path="/" component={Home} />
        </Router>
    )
}
