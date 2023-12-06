import { Dispatch, SetStateAction } from "react";

interface AuthUser {
    username: string;
    email: string;
    token: string;
} 

interface AuthUserCheck {
    user: AuthUser | null;
    error: string | null
}

interface AuthContextType {
    currentAuthUser: AuthUser | null;
    setCurrentAuthUser: Dispatch<SetStateAction<AuthUser | null>>;
}

export type { AuthUser, AuthUserCheck, AuthContextType };
