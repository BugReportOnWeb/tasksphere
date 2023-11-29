import { Dispatch, SetStateAction } from "react";

interface AuthContextType {
    currentAuthUser: string | null;
    setCurrentAuthUser: Dispatch<SetStateAction<string | null>>;
}

export type { AuthContextType };
