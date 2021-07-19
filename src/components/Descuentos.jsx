import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { UseColores } from './../hooks/UseColores';
import { UseOnlyNumbers } from './../hooks/UseOnlyNumbers';

export const Descuentos = () => {
    const [Precio, setPrecio] = useState(0)
    const [Descuento, setDescuento] = useState(0)
    const [Resultado, setResultado] = useState("")
    const [Value1, setValue1] = useState("")
    const [Value2, setValue2] = useState("")

    useEffect(() => {
        if (Precio !== 0 && Descuento !== 0) {
            setResultado(Precio - (Precio * (Descuento / 100)))
        }
    }, [Precio, Descuento])

    const Main = (e, Caja) => {
        var value = e.split('')
        var Allowed = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", undefined]

        if (UseOnlyNumbers(value[value.length - 1], Allowed) !== "") {
            if (Caja === "Caja1") {
                if (e !== "") {
                    setPrecio(e)
                }
                else {
                    setPrecio(0)
                    setResultado("")
                }
                setValue1(e)
            }
            else {
                if (e !== "") {
                    setDescuento(e)
                }
                else {
                    setDescuento(0)
                    setResultado("")
                }
                setValue2(e)
            }
        }
    }

    return (
        <div className={"Descuentos__container " + UseColores()}>
            <h1>Descuentos</h1>
            <div className="Descuentos__card card">
                <p className="icon">$</p>
                <div className="Descuentos__input">
                    <p>Precio:</p>
                    <TextField
                        value={Value1}
                        label="Precio"
                        variant="outlined"
                        onChange={(a) => Main(a.target.value, "Caja1")}
                    />
                </div>
                <div className="Descuentos__input">
                    <p>Descuento %:</p>
                    <TextField
                        value={Value2}
                        label="Descuento %"
                        variant="outlined"
                        onChange={(a) => Main(a.target.value, "Caja2")}
                    />
                </div>
                <p className="Resultado">
                    {
                        (Resultado === "")
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
