import userModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";



// registration ------------------------------------------------------------------------------------------------------------

async function userRegistration(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send({ message: "Name, email, and password are required." });
    }

    try {
        const isUserExist = await userModel.findOne({ email });
        if (isUserExist) {
            return res.status(400).send({ message: "User already exists, please login." });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const userCreated = await userModel.create({ name, email, password: hashedPassword });

        if (userCreated) {
            const token = jwt.sign({ email, id: userCreated._id }, process.env.JWT_PRIVATE_KEY, { expiresIn: '1h' });
            console.log("token regi.  time : -", token)

            res.cookie("jwttoken", token, { httpOnly: true, maxAge: 3600000 }); // 1 hour
            return res.status(201).send({
                message: "User registered successfully.",
                userId: userCreated._id,
                name: userCreated.name,
            });
        }

        return res.status(500).send({ message: "Registration failed. Please try again." });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "An error occurred during registration." });
    }
}


// login -------------------------------------------------------------------------------------------------------------
async function userLogin(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: "Email and password are required." });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: "User does not exist." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send({ message: "Invalid password." });
        }

        const token = jwt.sign({ email, id: user._id }, process.env.JWT_PRIVATE_KEY, { expiresIn: '1h' });
        console.log("token login time : -", token)
        res.cookie("jwttoken", token, { httpOnly: true, maxAge: 3600000 }); // 1 hour

        return res.status(200).send({
            message: "Login successful.",
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "An error occurred during login." });
    }
}


// profile

async function userProfile(req, res) {
    let { email, id } = req.user // --getting it form middleware (req.user)
    try {
        res.status(200).send({ message: `HI.. ${email}, welcome`, info: { email, id } });
    } catch (error) {
        res.status(500).send({ message: "can't access profile." });
    }
}

export { userLogin, userRegistration, userProfile }
