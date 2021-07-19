import React, { useState } from 'react'
import { UseColores } from './../hooks/UseColores';
import TextField from '@material-ui/core/TextField';
import { UseOnlyNumbers } from './../hooks/UseOnlyNumbers';

export const Estadistica = () => {
    const [Promedio, setPromedio] = useState()
    const [Mediana, setMediana] = useState()
    const [Moda, setModa] = useState()
    const [Values, setValues] = useState("")

    const Main = (a) => {
        var value = a.split('')
        var Allowed = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ",", ".", " ", undefined]
        if (UseOnlyNumbers(value[value.length - 1], Allowed) !== "") {
            if (a !== "") {
                setValues(a)
                var numeros = []
                var preNumeros = a.split(',')
                for (let i = 0; i < preNumeros.length; i++) {
                    numeros.push(parseInt(preNumeros[i]))
                }

                if (isNaN(numeros[numeros.length - 1])) {
                    numeros.pop()
                }

                GetPromedio(numeros);
                GetModa(numeros)
                GetMediana(numeros)
            }
            else {
                Limpiar()
            }
        }
    }

    const GetPromedio = (x) => {
        var suma = 0;
        for (let i = 0; i < x.length; i++) {
            suma += x[i]
        }
        setPromedio(suma / x.length)
    }

    const GetModa = (x) => {
        var lista = {};
        x.map(
            function (e) {
                if (lista[e]) {
                    lista[e] += 1
                }
                else {
                    lista[e] = 1;
                }
            }
        )

        const listaArray = Object.entries(lista).sort(
            function (A, B) {
                return A[1] - B[1];
            }
        )

        setModa(listaArray[listaArray.length - 1][0])
    }

    const GetMediana = (x) => {
        const listaArray = x.sort(function (a, b) {
            return a - b;
        });

        var mediana = 0
        var size = listaArray.length
        if ((x.length % 2) === 0) {
            mediana = (listaArray[(size / 2) - 1] + listaArray[(size / 2)]) / 2
        }
        else {
            mediana = listaArray[size / 2 - .5]
        }
        setMediana(mediana)
    }

    const Limpiar = () => {
        setPromedio(undefined)
        setModa(undefined)
        setMediana(undefined)
        setValues("")
    }

    return (
        <div className={"Estadistica__container " + UseColores()}>
            <h1>Promedio, moda y mediana</h1>
            <h2>Calcula el promedio, moda y meidana de una lista</h2>
            <div className="Estadistica__card card">
                <p>Ingesa la lista de numeros</p>
                <div className="TextBoxArea">
                    <TextField
                        value={Values}
                        label="Numeros"
                        variant="outlined"
                        onChange={(a) => Main(a.target.value)}
                    />
                    <div
                        className="btnClear"
                        onClick={Limpiar}
                    >
                        Limpiar
                    </div>
                </div>
                <div className="Resultado">
                    {
                        (Promedio !== undefined && Promedio !== 0)
                            ?
                            <>
                                <p>Promedio: {Promedio}</p>
                                <p>Moda: {Moda}</p>
                                <p>Mediana: {Mediana}</p>
                            </>
                            :
                            "Esperando datos"
                    }
                </div>
            </div>
        </div>
    )
}
