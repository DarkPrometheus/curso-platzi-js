import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="Home__container">
            <h1>Curso de platzi</h1>
            <p>Este es el primer taller del curso practico de JavaScript</p>
            <div className="Home__menuContainer">
                <div className="Home__menu">
                    <Link to="/Figuras" className="Figuras">

                    </Link>
                    <Link to="/Figuras" className="btn">Figuras</Link>
                </div>
                <div>
                    <div className="Home__menu">
                        <Link to="/Descuentos" className="Descuentos">
                            $
                        </Link>
                        <Link to="/Descuentos" className="btn">Descuentos</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
