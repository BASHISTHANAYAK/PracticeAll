
import jwt from "jsonwebtoken";

const userMiddleware = (req, res, next) => {
    let token = req.cookies.jwttoken;
    if (!token) {
        return res.status(400).send({ message: "token not available please login first..." })
    }
    jwt.verify(token, process.env.JWT_PRIVATE_KEY, function (err, decoded) {
        if (err) {
            return res.status(400).send({ message: "token not available please login first..." })
        }
        req.user = decoded
        next()
    });
    next()
}
export default userMiddleware;