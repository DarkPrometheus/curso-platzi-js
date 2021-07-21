import React from 'react'
import { Link } from 'react-router-dom'
import taller1 from "./img/1.png"
import taller2 from "./img/2.png"
import taller3 from "./img/3.png"

export const Home = () => {
    return (
        <div className="Home__container">
            <div className="Home__mainContainer" >
                <h1>Curso de platzi</h1>
                <h2>Curso práctico de JavaScript</h2>
                <p>Página web de matemáticas con JavaScript</p>
                <h3>Hecho con</h3>
                <ul>
                    <li>React</li>
                    <li>SASS</li>
                </ul>
            </div>
            <div className="Home__menuContainer">
                <div className="Home__menu">
                    <Link to="/Figuras">
                        <div className="Img">
                            <img src={taller1} alt="Dinero" />
                        </div>
                        <div className="Textos" >
                            <h3>Taller #1</h3>
                            <h2>Figuras geometricas</h2>
                            <p>Calcula el area y el perimetro de figuras</p>
                        </div>
                    </Link>
                    <Link to="/Descuentos">
                        <div className="Img">
                            <img src={taller2} alt="Dinero" />
                        </div>
                        <div className="Textos" >
                            <h3>Taller #2</h3>
                            <h2>Descuentos</h2>
                            <p>Porcentajes y descuentos en precios</p>
                        </div>
                    </Link>
                    <Link to="/Estadistica">
                        <div className="Img">
                            <img src={taller3} alt="Dinero" />
                        </div>
                        <div className="Textos" >
                            <h3>Taller #3</h3>
                            <h2>Promedio, moda y mediana</h2>
                            <p>Calcula el promedio, moda y meidana de una lista</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
