import React from 'react'

export const UseOnlyNumbers = (a) => {
    const Allowed = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ",", ".", " ", undefined]
    if (Allowed.includes(a)) return a
    else return ""
}
