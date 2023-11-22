import { Request, Response } from "express";
import { genSalt, hash, compare } from 'bcrypt';
import User from "../models/user";
import { validationResult } from "express-validator";
import { createToken } from "../lib/utils";

let users: User[] = [];

// For debug purpose
const getAllUsers = (_req: Request, res: Response) => {
    res.send(users);
}

const loginUser = async (req: Request, res: Response) => {
    // CHECK: Reconsider validation on login
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = users.find(user => user.email === email);

    if (!user) {
        const error = 'User doesn\'t exist';
        return res.status(400).send({ error });
    }

    const correctPassword = await compare(password, user.password);

    if (!correctPassword) {
        const error = 'Wrong password';
        return res.status(400).send({ error });
    }

    const token = createToken(email);
    const response = { email, token };

    res.send(response);
}

const registerUser = async (req: Request, res: Response) => {
   const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = users.find(user => user.email === email);

    if (user) {
        const error = 'User already exist';
        return res.status(400).send({ error });
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const newUser = {
        email,
        password: hashedPassword
    }

    users.push(newUser);

    const token = createToken(email);
    const response = { email, token };

    res.send(response);
}

export {
    loginUser,
    registerUser,
    getAllUsers
};
