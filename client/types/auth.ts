import { Dispatch, SetStateAction } from "react";

type AuthUser = {
    username: string;
    email: string;
    token: string;
} 

type AuthUserCheck = {
    user: AuthUser | null;
    error: string | null
}

type AuthContextType = {
    currentAuthUser: AuthUser | null;
    setCurrentAuthUser: Dispatch<SetStateAction<AuthUser | null>>;
}

export type { AuthUser, AuthUserCheck, AuthContextType };
