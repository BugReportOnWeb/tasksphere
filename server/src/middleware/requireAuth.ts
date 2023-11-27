import jwt, { JwtPayload } from 'jsonwebtoken';
import {
    NextFunction,
    Request,
    Response
} from "express";
const JWT_SECRET = process.env.JWT_SECRET as string;

interface Payload extends JwtPayload {
    email: string
}

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) {
        const error = 'No JWT token provided';
        return res.status(401).send({ error });
    }

    const token = authorization.split(' ')[1];

    try {
        // CHECK: Use of 'as'
        const payload = jwt.verify(token, JWT_SECRET) as Payload;
        req.email = payload.email;
        next();
    } catch (err) {
        const error = 'Unauthorized access';
        return res.status(401).send({ error });
    }
}

export default requireAuth;
