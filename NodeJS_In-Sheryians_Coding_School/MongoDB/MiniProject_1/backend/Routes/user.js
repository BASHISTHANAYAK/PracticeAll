import express from "express";
import { userLogin, userProfile, userRegistration } from "../controllers/user.js";
import userMiddleware from "../middlewares/userMiddleware.js";
const router = express.Router()

router.post("/login", userLogin)
router.post("/registration", userRegistration)
router.get("/profile", userMiddleware, userProfile)

export default router;