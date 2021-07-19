import React from 'react'

export const useIncludesDots = (a) => {
    var temp = a.split('')

    var lista = {};
    temp.map(
        function (e) {
            if (lista[e]) {
                lista[e] += 1
            }
            else {
                lista[e] = 1;
            }
        }
    )

    const listaArray = Object.entries(lista)

    return listaArray[listaArray.length - 1][1]
}
