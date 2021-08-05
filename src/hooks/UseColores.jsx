export const UseColores = () => {
    switch (Math.floor(Math.random() * 8) + 1) {
        case 1:
            return "Color1"
        case 2:
            return "Color2"
        case 3:
            return "Color3"
        case 4:
            return "Color4"
        // case 5:
        //     return "Color1I"
        // case 6:
        //     return "Color2I"
        // case 7:
        //     return "Color3I"
        // case 8:
        //     return "Color4I"

        default:
            break;
    }
}
