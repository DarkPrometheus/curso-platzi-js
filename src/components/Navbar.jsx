import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import platzi from "./img/platzi.webp";
import js from "./img/js-challenge-logo.png";

export const Navbar = () => {
    const [HideClass, setHideClass] = useState("hide")
    const [Arrow, setArrow] = useState("normal")

    const ChangeHide = () => {
        if (HideClass === "hide") {
            setHideClass("show")
            setArrow("invertido")
        }
        else {
            setHideClass("hide")
            setArrow("normal")
        }
    }

    const Close = () => {
        setHideClass("hide")
        setArrow("normal")
    }

    return (
        <nav>
            <div className="Logo__container">
                <a
                    href="https://platzi.com/p/emmanuelf/"
                    target='_blank'
                    rel="noreferrer"
                >
                    <img src={platzi} alt="platzi-logo" className="logo platzi" />
                </a>
            </div>
            <div
                onClick={ChangeHide}
            >
                <img
                    src="https://img.icons8.com/glyph-neue/64/ffffff/expand-arrow.png"
                    alt="Flecha menu"
                    className={Arrow}
                />
            </div>
            <ul
                className={HideClass}
            >
                <li><Link
                    to="/"
                    onClick={Close}
                >Home</Link></li>
                <li><Link
                    to="/Figuras"
                    onClick={Close}
                >Taller #1</Link></li>
                <li><Link
                    to="/Descuentos"
                    onClick={Close}
                >Taller #2</Link></li>
                <li><Link
                    to="/Estadistica"
                    onClick={Close}
                >Taller #3</Link></li>
                <li><a
                    href="https://github.com/DarkPrometheus"
                    target='_blank'
                    rel="noreferrer"
                >
                    Github
                </a></li>
                <li className="Logos">
                    <img src={platzi} alt="platzi-logo" />
                    <img src={js} alt="js" />
                </li>
            </ul>
            <div className="Logo__container">
                <img src={js} alt="js" className="logo js" />
            </div>
        </nav>
    )
}
