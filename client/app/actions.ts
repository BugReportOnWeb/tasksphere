'use server'

import { login, register } from "@/lib/user";
import { AuthUser } from "@/types/auth";

const registerUser = async (_prevState: any, formData: FormData) => {
    // CHECK: Valid use of 'as' in this
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const userDetails = { username, email, password };

    try {
        // CHECK?: Type checking could be done on the first server request
        // check on @/lib/user
        const user: AuthUser = await register(userDetails);
        const newState = {
            user,
            error: null
        };

        return newState;
    } catch (error) {
        if (error instanceof Error) {
            const newState = {
                user: null,
                error: error.message
            };

            return newState;
        }
    }
}

const loginUser = async(_prevState: any, formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const userDetails = { email, password };

    try {
        const user: AuthUser = await login(userDetails);
        const newState = {
            user, 
            error: null
        }

        return newState;
    } catch (error) {
        if (error instanceof Error) {
            const newState = {
                user: null,
                error: error.message
            }

            return newState;
        }
    }
}

export { registerUser, loginUser };
