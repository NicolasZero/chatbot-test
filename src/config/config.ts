const {
    jwtToken,
    numberId,
    verifyToken,
    version,
    PORT = 3008,
} = process.env

export const config = {
    jwtToken,
    numberId,
    verifyToken,
    version,
    PORT
}

export default config