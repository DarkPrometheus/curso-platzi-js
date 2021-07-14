export const UseColores = () => {
    switch (Math.floor(Math.random() * 4) + 1) {
        case 1:
            return "Color1"
        case 2:
            return "Color2"
        case 3:
            return "Color3"
        case 4:
            return "Color4"

        default:
            break;
    }
}
