function namee() {
    console.log(7);
    return "hola"
}

export const {
    jwtToken,
    numberId,
    verifyToken,
    version,
    PORT = 3008,
    ok
} = process.env

export const saludo = namee()

export default saludo