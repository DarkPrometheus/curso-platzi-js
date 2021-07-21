import React, { useState } from 'react'
import { Link } from 'react-router-dom';

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
            </ul>
        </nav>
    )
}
