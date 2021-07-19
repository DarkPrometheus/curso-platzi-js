import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="Home__container">
            <h1>Curso de platzi</h1>
            <p>Este es el primer taller del curso practico de JavaScript</p>
            <div className="Home__menuContainer">
                <div className="Home__menu">
                    <Link to="/Figuras" className="Icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 20h18L12 4z" />
                        </svg>
                    </Link>
                    <Link to="/Figuras" className="btn">Figuras</Link>
                </div>
                <div className="Home__menu">
                    <Link to="/Descuentos" className="Icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                    </Link>
                    <Link to="/Descuentos" className="btn">Descuentos</Link>
                </div>
                <div className="Home__menu">
                    <Link to="/Estadistica" className="Icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18.6 18.6L12 12V2.5" />
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                    </Link>
                    <Link to="/Descuentos" className="btn">Descuentos</Link>
                </div>
                <div className="Home__menu">
                    <Link to="/Descuentos" className="Icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="20" x2="18" y2="10"></line>
                            <line x1="12" y1="20" x2="12" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="14"></line>
                        </svg>
                    </Link>
                    <Link to="/Descuentos" className="btn">Descuentos</Link>
                </div>

            </div>
        </div>
    )
}
