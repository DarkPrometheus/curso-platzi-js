import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { UseColores } from './../hooks/UseColores';

export const Descuentos = () => {
    const [Precio, setPrecio] = useState(0)
    const [Descuento, setDescuento] = useState(0)
    const [Resultado, setResultado] = useState(0)

    useEffect(() => {
        if (Precio !== 0 && Descuento !== 0) {
            setResultado(Precio - (Precio * (Descuento / 100)))
        }
    }, [Precio, Descuento])

    return (
        <div className={"Descuentos__container " + UseColores()}>
            <h1>Descuentos</h1>
            <div className="Descuentos__card">
                <p className="icon">$</p>
                <div className="Descuentos__input">
                    <p>Precio:</p>
                    <TextField label="Precio" variant="outlined" onChange={(a) => setPrecio(a.target.value)} />
                </div>
                <div className="Descuentos__input">
                    <p>Descuento:</p>
                    <TextField label="Descuento" variant="outlined" onChange={(a) => setDescuento(a.target.value)} />
                </div>
                <p className="Resultado">
                    {
                        (Resultado === 0)
                            ?
                            "Esperando datos"
                            :
                            ("El precio final es: " + Resultado)
                    }
                </p>
            </div>
        </div>
    )
}
