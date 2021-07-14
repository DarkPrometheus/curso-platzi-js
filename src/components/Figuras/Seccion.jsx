import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';

export const Seccion = (props) => {
    const [Perimetro, setPerimetro] = useState(0)
    const [Area, setArea] = useState(0)
    const [PoligonoLados, setPoligonoLados] = useState(5)

    const Calcular = (l) => {
        switch (props.alt) {
            case "cuadrado":
                setPerimetro(l * 4)
                setArea(l * l)
                break;
            case "triangulo":
                setPerimetro(l * 3)
                setArea((l * l) / 2)
                break;
            case "poligono":
                setArea(((l * l) / 2) * PoligonoLados)
                break;
            case "circulo":
                setArea(Math.pow((l), 2) * 3.1416)
                break;
            default:
                break;
        }
    }

    return (
        <div className="Figuras__seccionCard">
            <div className="Figuras__seccion">
                <div className="Figuras__seccionTitulo">
                    <img src={props.img} alt={props.alt} />
                    <h3>{props.title}</h3>
                </div>
                <p>{props.desc}</p>
                <TextField label={props.lablel} variant="outlined" onChange={(a) => Calcular(a.target.value)} />
                {
                    (props.alt === "poligono")
                        ?
                        <>
                            <p>{props.desc2}</p>
                            <TextField defaultValue={5} label={props.lablel2} variant="outlined" onChange={(a) => Calcular(a.target.value)} />
                        </>
                        :
                        <>
                        </>
                }
            </div>
            <div className="Figuras__Resultados">
                {
                    (props.perimetro)
                        ? <div className="Figuras__Resultado">
                            <h3>Perimetro:</h3>
                            <p>{Perimetro}</p>
                        </div>
                        :
                        <>
                        </>
                }
                <div className="Figuras__Resultado">
                    <h3>Area:</h3>
                    <p>{Area}</p>
                </div>
            </div>
        </div>
    )
}
