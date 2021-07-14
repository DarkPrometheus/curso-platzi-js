import React from 'react'
import { Seccion } from './Seccion';
import { UseColores } from './../../hooks/UseColores';

export const Figuras = () => {

    return (
        <div className={"Figuras__container " + UseColores()}>
            <h1>Figuras geometricas</h1>
            <h2>Calcula el area y el perimetro de figuras</h2>
            <div className="Figuras__seccionContainer">
                <Seccion img="https://img.icons8.com/ios/50/000000/rounded-square.png" alt="cuadrado" title="Cuadrado" desc="Escribe el tamaño del lado de tu cuadrado: " lablel="Lado" perimetro={true} />
                <Seccion img="https://img.icons8.com/ios/50/000000/triangle-stroked.png" alt="triangulo" title="Triangulo" desc="Escribe el tamaño del lado de tu triangulo: " lablel="Lado" perimetro={true} />
                <Seccion img="https://img.icons8.com/ios/50/000000/circled.png" alt="circulo" title="Circulo" desc="Escribe el radio del ciruclo: " lablel="Radio" />
                <Seccion img="https://img.icons8.com/ios/50/000000/polygon.png" alt="poligono" title="Poligono" desc="Escribe el tamaño del poligono regular: " lablel="Lado" desc2="Escribe los lados del poligono regular: " lablel2="Lados" perimetro={true} />
            </div>
        </div>
    )
}
