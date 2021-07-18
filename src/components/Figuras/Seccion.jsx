import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';

export const Seccion = (props) => {
    const [Perimetro, setPerimetro] = useState(0)
    const [Area, setArea] = useState(0)
    const [PoligonoLados, setPoligonoLados] = useState(6)
    const [Apotema, setApotema] = useState()

    const Calcular = (l, TipoValor) => {
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
                if (TipoValor === "Lado") {
                    setPoligonoLados(l)
                }
                else if (TipoValor === "Apo") {
                    setApotema(l)
                }
                break;
            case "circulo":
                setArea(Math.pow((l), 2) * 3.1416)
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (Apotema !== undefined && PoligonoLados !== undefined) {
            var grados = (360 / (2 * PoligonoLados))

            var radianes = grados * (Math.PI / 180)
            var tangente = Math.tan(radianes)
            var x = Apotema * tangente
            var lado = 2 * x

            console.log(grados)
            console.log(radianes)
            console.log(tangente)
            console.log(Apotema + "-" + x)
            console.log(lado)
            setPerimetro(lado * PoligonoLados)
            console.log(Perimetro)
            setArea((Perimetro * Apotema) / 2)
        }
    }, [Apotema, PoligonoLados, Perimetro])

    return (
        <div className="Figuras__seccionCard">
            <div className="Figuras__seccion">
                <div className="Figuras__seccionTitulo">
                    <img src={props.img} alt={props.alt} />
                    <h3>{props.title}</h3>
                </div>
                <p>{props.desc}</p>
                <TextField label={props.lablel} variant="outlined" onChange={(a) => Calcular(a.target.value, "Apo")} />
                {
                    (props.alt === "poligono")
                        ?
                        <>
                            <p>{props.desc2}</p>
                            <TextField defaultValue={6} label={props.lablel2} variant="outlined" onChange={(a) => Calcular(a.target.value, "Lado")} />
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
