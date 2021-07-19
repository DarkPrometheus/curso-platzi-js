import React from 'react'

export const UseOnlyNumbers = (a, Allowed) => {
    if (Allowed.includes(a)) return a
    else return ""
}
