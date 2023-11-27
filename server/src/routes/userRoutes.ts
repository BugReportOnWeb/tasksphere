import { Router } from "express";
import { loginUser, registerUser } from "../controllers/userControllers";
import { userValidationRules } from "../lib/validation";

const router = Router();

router.post('/login', userValidationRules, loginUser);
router.post('/register', userValidationRules, registerUser);

export { router as userRoutes };
