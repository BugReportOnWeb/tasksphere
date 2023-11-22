import { Router } from "express";
import { loginUser, registerUser } from "../controllers/userControllers";
import { userValidationRules } from "../lib/validation";

const router = Router();

router.get('/login', userValidationRules, loginUser);
router.get('/register', userValidationRules, registerUser);

export { router as userRoutes };
